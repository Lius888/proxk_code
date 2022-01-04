<?php

/**
 * @Description		工艺流程模块
 * @Author			LiuS POrderController
 * @Date			2020-11-02 15:07:46
 * @LastEditTime	2020-11-02 15:07:46
 */


namespace api\app\controller;

// use api\app\model\OptionModel;
// use api\app\model\UserPlatformInfoModel;
// use api\app\model\UserModel;
// use api\app\model\AssetModel;
// use api\app\model\roductionModel;
use think\Db;
use think\facade\Cache;

class ProductionController extends RestBaseController
{
    public function __construct(){
		parent::__construct();
		$this->_initUser();
	}
	
	/**
	 * @access         public
	 * @example        获取加工工艺
	 * @param          string  variable        explain
	 * @author         LiuS
	 * @version        2020-11-02 10:55:19
	 * @return         json
	 */
	public function get_pro(){
	    $pro_list                       = Db::name('Production')->where('status',1)->where('parentid',0)->order('sort desc')->field('pid,pname,is_yes,is_choice')->select()->toArray();
	    
	    foreach ($pro_list as $key => $value){
	        $tmp        	            = Db::name('Production')->where('parentid',$value['pid'])->where('status',1)->order('sort desc')->field('pid,pname,is_yes,is_choice')->select()->toArray();
	        if(!empty($tmp))        
	            $pro_list[$key]['next_level']    = $tmp;
	        else 
	            $pro_list[$key]['next_level']    = [];
	       //$pro_list[$key]['next_levelsql']    =  Db::name('Production')->getLastSql();
	    }
	    
	    return $this->success('success',$pro_list);
	}
	/**
	 * @access         public
	 * @example        添加加工材料信息
	 * @param          string  variable        explain
	 * @author         LiuS
	 * @version        2020-11-03 10:00:19
	 * @return         json
	 */
	public function add_porder(){
	    $name       				= $this->request->post('name','');      //名称
		$material       			= $this->request->post('material','');      //材质 
		$number            			= $this->request->post('number',0); //数量 number 
		$length            			= $this->request->post('length',0); //长度length 
		$width            			= $this->request->post('width',0); //宽度 width 
		$inch_length            	= $this->request->post('inch_length',0); //坑纸长度length 
		$inch_width            		= $this->request->post('inch_width',0); //坑纸宽度 width 
		$com_number       			= $this->request->post('com_number',0); //交付数量 com_number 
		$remark            			= $this->request->post('remark','');  //备注 remark $this->userId
		$id                         = $this->request->post('id',0);      //id
		$uid                        = $this->request->post('uid',0);      //id   return
		$user_name                  = $this->request->post('user_name',0);      //id
		$com_time                   = $this->request->post('com_time',0);      //交货日期
		$is_return                  = $this->request->post('is_return',0);      //是否回厂
		$return                     = $this->request->post('return',0);      //回厂时间
		$factory                    = $this->request->post('factory','');      //印刷工厂
		$image                      = $this->request->post('image','');      //来料图片 image
		$pcart_data                 = $this->request->post('data/a',[]);      //材料id is_choice
	   // $defective                  = $this->request->post('defective',0);//残次品数
		if(empty($name) || empty($material) || empty($number) || empty($length) || empty($width)){
		   	return $this->error(['code' => 202, 'msg' => '请填写完整!']);
		}
		if(empty($this->userId)) return $this->error(['code' => 202, 'msg' => '请重新登录!']);
		if(!empty($com_time)) $com_time = strtotime($com_time.' 00:00:00');
		if(!empty($return)) $return = strtotime($return.' 00:00:00');
// 		if(empty($this->role))      $status = 0;
		$data                       = [
		    'uid'                   => $uid ?? $this->userId,
		    'user_name'             => $user_name,
		    'name'                  => $name, 
		    'material'              => $material, 
		    'number'                => $number, 
		    'length'                => $length, 
		    'width'                 => $width, 
		    'inch_length'           => $inch_length, 
		    'inch_width'            => $inch_width, 
		    'remark'                => $remark, 
		    'com_time'              => $com_time ,
		    'com_number'            => $com_number,
		    'is_return'             => $is_return,
		    'image'                 => $image,
		    'factory'               => $factory,
		  //  'is_choice'             => $is_choice,
		    'status'                => empty($this->role) ? 0 : 1, 
		    ];
        if(!empty($is_return))  $data['return_time'] = $return;
        if(empty($id)){
            $data['add_time']       = time();
            $no                     = Db::name('porder')->max('oid');
            $no                     = $no + 10000;
            $data['order_no']       = date('Ymd').$no;//'gdno'.$data['add_time'].mt_rand(1000,9999);
            $res             = Db::name('porder')->insert($data);
            if($res){                    // Db::commit();
                $data['id']         = Db::name('porder')->getLastInsID();
                $insert                     = [];
                foreach ($pcart_data as $value){
                    $tmp                    = [];
                    foreach ($value as $key => $val){
                        $tmp                = [
                            'poid'          => $data['id'],
                            'proid'         => $key,
                            'add_time'      => time(),
                            'remark'        => $val,
                        ];
                    }
                    $insert[]               = $tmp;
                }
        	    if(!empty($insert)) {
        	        Db::name('pocart')->data($insert)->insertAll();
        	    }
        	    $data['insert'] = $insert;
                return $this->success('success',$data);
            }
        }else{
            $data['edit_time']      = time();
            $res                    = Db::name('porder')->where('oid',$id)->update($data);
            $data['id']             = $id;
            if($res){
                return $this->success('success',$data);
            }
        }

        return $this->error('提交失败，请检查网络或稍后再试!');

	}
	/**
	 * @access         public
	 * @example        添加材料加工工艺信息
	 * @param          string  variable        explain
	 * @author         LiuS
	 * @version        2020-11-03 10:02:19
	 * @return         json
	 */
	public function add_pcart(){
	    if(empty($this->userId)) return $this->error(['code' => 202, 'msg' => '请重新登录!']);
	    $data                       = $this->request->post('data/a',[]);      //材料id
// 	    $poid       				= $this->request->post('oid',0);      //材料id
// 		$proid       			    = $this->request->post('production_id/a',[]);   //工艺流程ID
// 		$remark            			= $this->request->post('remark','');  //工艺流程备注 remark $this->userId
        $insert                     = [];
        if(empty($data))            return $this->error(['code' => 202, 'msg' => '请确认参数无误!']);   
        // $data                       = json_decode($data,true);
        foreach ($data as $value){
            $tmp                    = [];
            foreach ($value['proid'] as $key => $val){
                $tmp[]              = [
                    'poid'          => $value['oid'],
                    'proid'         => $key,
                    'add_time'      => time(),
                    'remark'        => $val,
                ];
            }
            $insert                 = $tmp;
        }
	    if(empty($data) || empty($insert)) return $this->error(['code' => 202, 'msg' => '请确认参数无误!']);

        $res             = Db::name('pocart')->data($insert)->insertAll();
        if($res){
            return $this->success('success',$insert);
        }else{
            return $this->error('提交失败，请检查网络或稍后再试!');
        }
       
	}
	
	/**
	 * @access         public
	 * @example        修改材料加工工艺信息-分批按钮
	 * @param          string  variable        explain
	 * @author         LiuS
	 * @version        2020-11-07 10:02:19
	 * @return         json
	 */
	public function buch_pcart(){
	    if(empty($this->userId)) return $this->error(['code' => 202, 'msg' => '请重新登录!']);
	    $proid       				= $this->request->post('proid',0);      //加工工艺id
	    $poid       				= $this->request->post('poid',0);      //订单id
	    if(empty($proid) || empty($poid))            return $this->error(['code' => 202, 'msg' => $proid.'请确认参数无误!']); 
	    $insert                     = ['poid'=>$poid,'proid'=>$proid,'add_time'=>time()];
	    $res             = Db::name('pocart')->insert($insert);
	    if($res){
            return $this->success('success',$insert);
        }else{
            return $this->error('操作失败，请检查网络或稍后再试!');
        }
	}
	/**
	 * @access         public
	 * @example        修改材料加工工艺信息----旧的
	 * @param          string  variable        explain
	 * @author         LiuS
	 * @version        2020-11-03 10:02:19
	 * @return         json
	 */
	public function edit_pcart(){
	    if(empty($this->userId)) return $this->error(['code' => 202, 'msg' => '请重新登录!']);
	    $data                       = $this->request->post('data/a',[]);      //材料id
	    $poid       				= $this->request->post('oid',0);      //材料id
// 		$proid       			    = $this->request->post('production_id/a',[]);   //工艺流程ID
// 		$remark            			= $this->request->post('remark','');  //工艺流程备注 remark $this->userId
        $insert                     = [];
        if(empty($data) || empty($poid))            return $this->error(['code' => 202, 'msg' => '请确认参数无误!']);   
        
        foreach ($data as $value){
            $tmp                    = [];
            foreach ($value['proid'] as  $val){
                $tmp[]              = [
                    'poid'          => $value['oid'],
                    'op_time'       => time(),
                    'proid'         => $val,
                ];
            }
            $insert                 = $tmp;
        }
	    if(empty($data) || empty($insert)) return $this->error(['code' => 202, 'msg' => '请确认参数无误!']);
        if(Db::name('pocart')->where('poid',$poid)->delete())
        $res             = Db::name('pocart')->data($insert)->insert();
        if($res){
            return $this->success('success',$insert);
        }else{
            return $this->error('提交失败，请检查网络或稍后再试!');
        }
	}
	
	public function workload_table(){
	    if(empty($this->role))     return $this->error(['code' => 202, 'msg' => '权限不足!']);
	    
	}
	
}