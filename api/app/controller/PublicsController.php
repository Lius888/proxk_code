<?php

/**
 * @Description		公共模块
 * @Author			LiuS
 * @Date			2020-11-02 15:07:46
 * @LastEditTime	2020-11-02 15:07:46
 */


namespace api\app\controller;


use api\app\model\OptionModel;
use api\app\model\UserPlatformInfoModel;
use api\app\model\UserModel;
use wxapp\aes\WXBizDataCrypt;

use api\app\model\AssetModel;

use api\app\model\ProductModel;

use think\Db;
use think\facade\Cache;

class PublicsController extends RestBaseController
{

	 
	public function index()
    {
        
    }



	// --------------------------------------------------------------------
	/**
	 * @access		public 
	 * @example		公共参数获取(option配置)
	 * @param		string 	variable		explain
	 * @author		LiuS
	 * @version		2020-11-02 16:16:24
	 * @return		json
	 */
	public function getCommonParameters()
	{

		$option_list					= OptionModel::getOptionList(['contact_us_mobile','customer_service_mobile','complaint_suggestion_mobile','company_profile','qq','company_address','company_name','company_image','crm_name']);

		if(!empty($option_list['company_image'])){
			$option_list['company_image']				= AssetModel::getHttpImage($option_list['company_image']);

		}

		$data							= [
			'option_list'				=> $option_list,
		];

		return $this->success('success',$data);
	}


	/**
	 * @access         public
	 * @example        手机登录
	 * @param          string  variable        explain
	 * @author         LiuS
	 * @version        2019-09-20 10:55:19
	 * @return         json
	 */
	public function mobileLogin(){
		$mobile       				= $this->request->post('mobile','');      //手机号
		$password       			= $this->request->post('password','');      //密码

		if(empty($mobile))				return $this->error('请输入手机号!');
		if(empty($password))			return $this->error('请输入密码!');


		$user 						= UserModel::where('mobile',$mobile)->find();
		if(empty($user))				return $this->error(['code' => 202, 'msg' => '帐号/密码错误!']);

		$user_pass					= $user['user_pass'];

		if(cmf_password($password) != $user_pass ){
			return $this->error(['code' => 202, 'msg' => '帐号/密码错误!']);
		}

		if($user['user_status'] != 1){
			return $this->error(['code' => 202, 'msg' => '该帐号已被禁用!']);

		}



		$result['last_login_ip']					= get_client_ip(0, true);
		$result['last_login_time']					= time();
		$token										= cmf_generate_user_token($user["id"], $this->deviceType);
		
		$data 					= $user;
		unset($data['user_pass']);
		$data['token']			= $token;

		UserModel::where('id', $user["id"])->update($result);

		return $this->success('LOGIN_SUCCESS', $data);

	}


    /**
     * [forgetPassword 修改密码]
     * LiuS
     * @return [type] [description]
     */
    public function forgetPassword(){
        $mobile        			= $this->request->post('mobile','');      		//手机号
        $oldPassword            = $this->request->post('oldPassword','');       //旧密码

        $newPassword        	= $this->request->post('newPassword','');      //新密码
        $passwordCopy       	= $this->request->post('passwordCopy','');     //确认密码     



        if(empty($mobile))    		return $this->error('手机号码不能为空!');   //手机号码不能为空

        $userInfo           	= UserModel::where('mobile', $mobile)->find();

        if(empty($userInfo))        return $this->error('该手机号码未注册!');		//该手机号码未注册

        if($userInfo['user_pass'] != cmf_password($oldPassword)){
        	return $this->error('密码错误!');
        }

        if($newPassword != $passwordCopy){
			return $this->error('两次密码输入不一样!');
        }

        $user_pass								= cmf_password($newPassword);

       	UserModel::where('id', $userInfo['id'])->data(['user_pass' => $user_pass])->update();

		$token									= cmf_generate_user_token($userInfo["id"], $this->deviceType);
		
		$data 									= $userInfo;
		unset($data['user_pass']);
		$data['token']							= $token;
		return $this->success('LOGIN_SUCCESS', $data);

    }
    
  
    

}