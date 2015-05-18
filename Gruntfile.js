//声明函数
module.exports = function(grunt){
	//数据被定义在一个object内，并传递给grunt.initConfig方法
	grunt.initConfig({
		//将存储在package.json文件中的JSON元数据引入到grunt config中
		pkg:grunt.file.readJSON('package.json'),
		//<% %> 为模板字符可以引用任意的配置属性
		//grunt-contrib-uglify 插件中的uglify任务要求它的配置被指定在一个同名属性中
		uglify:{
			options:{
				banner:'/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			//build为uglify任务的目标，用于将一个js文件压缩为一个目标文件
			build:{
				//src为初始录入文件的目录文件及文件名
				src:'js/index.js',
				// dest为结果输出文件的目录文件及文件名
				dest:'build/<%= pkg.name %>.min.js'
			}
		}
	});

	//加载包含 “uglify" 任务的插件。
	grunt.loadNpmTasks("grunt-contrib-uglify");

	//默认被执行的任务列表
	grunt.registerTask('default',['uglify']);
}


