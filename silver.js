(function(win){

    /**
    * Silver 对象
    *
    */
    var Silver = win.Silver = win.Silver || {global : win};

    /**
    * 空构造函数
    *
    */
    var emptyConstructor = function() {};

    /**
     * 继承方法
     *
     * @param function childClass 子类
     * @param function parentClass 父类
     *
     */
    Silver.extend = function(childClass, parentClass)
    {
        emptyConstructor.prototype = parentClass.prototype;
        childClass.superClass = parentClass.prototype;
        childClass.prototype = new emptyConstructor();
        childClass.prototype.constructor = childClass;
    };

    /**
    * 根据ID获取DOM节点
    *
    * @param string id 节点ID
    * @return object
    *
    */
    Silver.getId = function(id)
    {
        return document.getElementById(id);
    }

    /**
    * 根据tagname获取DOM节点
    *
    * @param string name 节点名
    * @return object
    *
    */
    Silver.getName = function(name)
    {
        return document.getElementsByTagName(name);
    }

    /**
     * 调试函数
     *
     */
     Silver.debug = function()
     {
        var logs = Array.prototype.slice.call(arguments);
        if(typeof(console) != "undefined" && typeof(console.log) != "undefined")
        {
            console.log(logs.join(" "));
        }
     };

    /**
     * 默认的全局 namespace 为 Silver 或 S
     *
     */
     if(win.S == undefined)
     {
         win.S = Silver;
     };

    /**
     * 全局调试函数
     *
     */
    if(win.debug == undefined)
    {
        win.debug = Silver.debug;
    };

})(window);