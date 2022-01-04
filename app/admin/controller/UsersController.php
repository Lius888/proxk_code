<?php

/**
 * @Description		产品列表
 * @Author			LiuS
 * @Date			2020-05-20 15:14:52
 * @LastEditTime	2020-05-20 15:14:52
 */

namespace app\admin\controller;

use cmf\controller\AdminBaseController;
use think\Db;


class UsersController extends AdminBaseController
{
	  // --------------------------------------------------------------------
    /**
     * @access        public
     * @example      添加用户
     * @param        string     variable        explain
     * @author        HJ
     * @version       2020-06-28 18:03:04
     * @return        json
     */
    public function addUsers()
    {
    	$content 							= hook_one('admin_add_users_view');


        if (!empty($content)) {
            return $content;
        }

        $roles_no = Db::name('production')->where('status', 1)->order("pid DESC")->select();
        $this->assign("roles_arr", $roles_no);
        return $this->fetch();
    }

     /**
     * 管理员添加提交
     * @adminMenu(
     *     'name'   => '管理员添加提交',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '管理员添加提交',
     *     'param'  => ''
     * )
     */
    public function addPost()
    {
        if ($this->request->isPost()) {


           $data                       = [];

            $data['user_type']    		= 2;
            $data['sex']              	= 0;
            $data['create_time']        = time();			//简介
            $data['user_status']        = 1;			//简介

            $data['mobile']        	  	= $this->request->param('mobile');        		//手机号
            $data['user_pass']          = $this->request->param('user_pass');        		//登录密码;cmf_password加密
            $data['user_nickname']     	= $this->request->param('user_nickname');           //用户昵称 
            $data['user_email']     	= $this->request->param('user_email');          	//用户登录邮箱 
            $data['avatar']     		= $this->request->param('avatar');          		//用户头像 
            $data['user_login']     	= $this->request->param('user_login');          		//用户名
			$data['signature']      	= $this->request->param('signature');          		//公司名称
            $data['role_no']     		= $this->request->param('role_no');          		//用户编码
            $data['role']       		= $this->request->param('role',0);          		//用户数据权限 1全部数据权限 0个人权限 2部分权限

            $host 						= $this->request->host();
            if(!empty($data['avatar'])){
                $data['avatar']             = 'https://'.$host.'/upload/'.$data['avatar'];
            }
            
            $res                        = Db::name('user')->where('mobile',$data['mobile'])->find();
            if($res)                    $this->error("手机号码重复！");

            $data['user_pass'] 			= cmf_password($data['user_pass']);
        	$product_id             	= Db::name('user')->insertGetId($data);


            if ($product_id !== false) {
                $this->success("添加成功！", url("user/admin_index/index"));
            } else {
                $this->error("添加失败！");
            }
            

        }
    }


    /**
     * @access         public
     * @example        编辑用户
     * @param          string  variable        explain
     * @author         HJ
     * @version        2020-09-25 15:42:15
     * @return         json
     */
    public function editUsers(){

        $content                            = hook_one('admin_edit_users_view');


        if (!empty($content)) {
            return $content;
        }

        $user_id                        	= $this->request->param('id');                  //用户ID 
        if(empty($user_id))             return $this->error("编辑失败!");

        $user                           	= Db::name('user')->where('id', $user_id)->find();

        $this->assign("role_no",  explode(',',$user['role_no']));
        $roles_no = Db::name('production')->where('status', 1)->order("pid DESC")->select();
        $this->assign("roles_arr", $roles_no);
       
        $this->assign("user", $user);
        return $this->fetch();
    }

    /**
     * @access         public
     * @example        编辑提交
     * @param          string  variable        explain
     * @author         HJ
     * @version        2020-09-25 15:43:34
     * @return         json
     */
    public function editPost(){
        if ($this->request->isPost()) {
            $user_id                    = $this->request->param('user_id');                  //用户ID 
            if(empty($user_id))          return $this->error("编辑失败!");

            $data                       = [];

            $data['user_status']        = 1;            //简介

            $data['user_pass']          = $this->request->param('user_pass');               //登录密码;cmf_password加密
            $data['user_nickname']      = $this->request->param('user_nickname');           //用户昵称 
            $data['user_email']         = $this->request->param('user_email');              //用户邮箱 
            $data['avatar']             = $this->request->param('avatar');                  //用户头像 
			$data['mobile']             = $this->request->param('mobile');                  //用户头像
			$data['user_login']     	= $this->request->param('user_login');          	//用户名
			$data['signature']      	= $this->request->param('signature');          		//公司名称
            $data['role_no']     		= $this->request->param('role_no');          		//用户编码 
            $data['role']       		= $this->request->param('role',0);          		//用户数据权限 1全部数据权限 2部分权限 0客户权限
			// foreach ($data as $key => $value ){
			// 	if(empty($value)) unset($data['$key']);
			// }
            $host                       = $this->request->host();

            if(!empty($data['avatar'])){
                $https                  = $data['avatar'];
                if(substr($https,0,4) == 'http'){
                    $data['avatar']             = $data['avatar'];
                }else{
                    $data['avatar']             = 'https://'.$host.'/upload/'.$data['avatar'];
                }
            }

            if(!empty( $data['user_pass']) ){
                $data['user_pass']          = cmf_password($data['user_pass']);               
            }else{
                unset($data['user_pass']);
            }

            $result                 = Db::name('user')->where('id', $user_id)->data($data)->update();


            if ($result !== false) {
                $this->success("编辑成功！", url("user/admin_index/index"));
            } else {
                $this->error("编辑失败！");
            }
            

        }
    }
    
     /**
	 * @access		public
	 * @example		加工订单操作
	 * @param		string 	variable		explain
	 * @author		LiuS
	 * @version		2020-11-03 17:47:28
	 * @return		json
	 */
	public function getUsers(){
        // if(empty($this->rule))     return $this->error(['code' => 202, 'msg' => '权限不足!']);
	     
        $search                         = $this->request->post('search','');//g关键词ID
        $role                           = $this->request->post('type',0);// 0普通用户 1管理员 2员工
        $User                           = Db::name('user');
        if(!empty($search)){
            $User->where('user_nickname|user_login|signature','like','%'.$search.'%');
        }
        if(empty($role)){
            $User->where('role',0);
            // $data                           = Db::name('user')->where('user_nickname|user_login|signature','like','%'.$search.'%')->where('role',0)->where('user_status',1)->where('user_type',2)->field('user_nickname,user_login,signature,id')->select();
        }else{
            $User->where('role > 0');
            // $data                           = Db::name('user')->where('user_nickname|user_login|signature','like','%'.$search.'%')->where('role > 0')->where('user_status',1)->where('user_type',2)->field('user_nickname,user_login,signature,id')->select();
        }
        $data                           = $User->where('user_status',1)->where('user_type',2)->field('user_nickname,user_login,signature,id')->select();
        if(!empty($data))
            return ['status'=>1,'data'=>$data,'msg'=>'获取成功'];//$this->success('success',['sql'=>Db::name('user')->getLastSql()]);
        else
            return ['code' => 202, 'msg' => '没有数据!'];//$this->error(['code' => 202, 'msg' => '没有数据!']);
        
	}
	/**
     * 本站用户删除
     * @adminMenu(
     *     'name'   => '本站用户删除',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '本站用户删除',
     *     'param'  => ''
     * )
     */
	public function delete(){
	    $id = input('param.id', 0, 'intval');
        if ($id) {
            $result = Db::name("user")->where(["id" => $id, "user_type" => 2])->setField('user_status', 4);
            if ($result) {
                $this->success("会员删除成功！", "user/adminIndex/index");
            } else {
                $this->error('会员删除失败,会员不存在,或者是管理员！');
            }
        } else {
            $this->error('数据传入失败！');
        }
	}

}