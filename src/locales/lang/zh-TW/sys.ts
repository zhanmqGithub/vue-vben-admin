export default {
  api: {
    operationFailed: '操作失败',
    errorTip: '错误提示',
    errorMessage: '操作失败,系统异常!',
    timeoutMessage: '登录超时,请重新登录!',
    apiTimeoutMessage: '接口请求超时,请刷新页面重试!',
    apiRequestFailed: '请求出错，请稍候重试',
    networkException: '网络异常',
    networkExceptionMsg: '网络异常，请检查您的网络连接是否正常!',

    errMsg401: '用户没有权限（令牌、用户名、密码错误）!',
    errMsg403: '用户得到授权，但是访问是被禁止的。!',
    errMsg404: '网络请求错误,未找到该资源!',
    errMsg405: '网络请求错误,请求方法未允许!',
    errMsg408: '网络请求超时!',
    errMsg500: '服务器错误,请联系管理员!',
    errMsg501: '网络未实现!',
    errMsg502: '网络错误!',
    errMsg503: '服务不可用，服务器暂时过载或维护!',
    errMsg504: '网络超时!',
    errMsg505: 'http版本不支持该请求!',
  },
  app: { logoutTip: '温馨提醒', logoutMessage: '是否确认退出系统?', menuLoading: '菜单加载中...' },
  errorLog: {
    tableTitle: '错误日志列表',
    tableColumnType: '类型',
    tableColumnDate: '时间',
    tableColumnFile: '文件',
    tableColumnMsg: '错误信息',
    tableColumnStackMsg: 'stack信息',

    tableActionDesc: '详情',

    modalTitle: '错误详情',

    fireVueError: '点击触发vue错误',
    fireResourceError: '点击触发资源加载错误',
    fireAjaxError: '点击触发ajax错误',

    enableMessage: '只在`/src/settings/projectSetting.ts` 内的useErrorHandle=true时生效.',
  },
  exception: {
    backLogin: '返回登陆',
    backHome: '返回首页',
    subTitle403: '抱歉，您无权访问此页面。',
    subTitle404: '抱歉，您访问的页面不存在。',
    subTitle500: '抱歉，服务器报告错误。',
    noDataTitle: '当前页无数据',
    networkErrorTitle: '网络错误',
    networkErrorSubTitle: '抱歉，您的网络连接已断开，请检查您的网络！',
  },
  lock: {
    unlock: '點擊解鎖',
    alert: '鎖屏密碼錯誤',
    backToLogin: '返回登录',
    entry: '进入系统',
    placeholder: '请输入锁屏密码或者用户密码',
  },
  login: {
    backSignIn: '返回',
    signInFormTitle: '登錄',
    mobileSignInFormTitle: '手機登錄',
    qrSignInFormTitle: '二維碼登錄',
    signUpFormTitle: '注冊',
    forgetFormTitle: '重置密碼',

    imgTitle: '電腦',
    signInTitle: '開箱即用的中後臺管理系統',
    signInDesc: '輸入您的個人詳細信息開始使用！',
    policy: '我同意xxx隱私政策',
    scanSign: `掃碼后點擊"確認"，即可完成登錄`,

    loginButton: '登錄',
    registerButton: '注冊',
    rememberMe: '記住我',
    forgetPassword: '忘記密碼?',
    otherSignIn: '其他登陸方式',

    // notify
    loginSuccessTitle: '登陸成功',
    loginSuccessDesc: '歡迎回來',

    // placeholder
    accountPlaceholder: '請輸入賬號',
    passwordPlaceholder: '請輸入密碼',
    smsPlaceholder: '請輸入驗證碼',
    mobilePlaceholder: '請輸入手機號碼',
    policyPlaceholder: '勾選后才能注冊',
    diffPwd: '兩次輸入密碼不一致',

    userName: '賬號',
    password: '密碼',
    confirmPassword: '確認密碼',
    email: '郵箱',
    smsCode: '短信驗證碼',
    mobile: '手機號碼',
  },
};
