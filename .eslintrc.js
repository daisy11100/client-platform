module.exports = {
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2019,
        // ECMAScript modules 模式
        "sourceType": "module",
        "ecmaFeatures": {
            // 不允许 return 语句出现在 global 环境下
            "globalReturn": false,
            // 开启全局 script 模式
            "impliedStrict": true,
            "jsx": true
        },
        // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
        "requireConfigFile": false,
        // 仅允许 import export 语句出现在模块的顶层
        "allowImportExportEverywhere": false
    },
    "env": {
        "browser": true,
        "node": false,
        "commonjs": true,
        "es6": true
    },
    "globals": {
        "process": "writable",
        "window": "writable"
    },
    "extends": [
        "plugin:vue/recommended"
    ],
    // 以当前目录为根目录，不再向上查找 .eslintrc.js
    "root": true,
    // required to lint *.vue files
    "plugins": [
        "vue",
        "html"
    ],
    "ignorePatterns": ["src/utils/smart-emitter.es5.js"],
    "rules": {
        /**
         * 禁止方向错误的 for 循环
         */
        "for-direction": "error",
        /**
         * getter 必须有返回值，并且禁止返回空
         */
        "getter-return": "error",
        /**
         * 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
         * @reason 要求太严格了，有时需要在循环中写 await
         */
        "no-await-in-loop": "off",
        /**
         * 禁止与负零进行比较
         */
        "no-compare-neg-zero": "error",
        /**
         * 禁止在测试表达式中使用赋值语句
         */
        "no-cond-assign": [
            "error"
        ],
        /**
         * 禁止使用 console，没必要，脚手架保障build过程中去除
         */
        "no-console": "off",
        /**
         * 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
         */
        "no-constant-condition": [
            "error",
            {
                "checkLoops": false
            }
        ],
        /**
         * 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
         * @reason 几乎不会遇到这种场景
         */
        "no-control-regex": "off",
        /**
         * 禁止使用 debugger，没必要，脚手架保障build过程中去除
         */
        "no-debugger": "off",
        /**
         * 禁止在函数参数中出现重复名称的参数
         * @reason 编译阶段就会报错了
         */
        "no-dupe-args": "error",
        /**
         * 禁止在对象字面量中出现重复的键名
         */
        "no-dupe-keys": "error",
        /**
         * 禁止在 switch 语句中出现重复测试表达式的 case
         */
        "no-duplicate-case": "error",
        /**
         * 禁止出现空代码块，允许 catch 为空代码块
         */
        "no-empty": [
            "error",
            {
                "allowEmptyCatch": true
            }
        ],
        /**
         * 禁止在正则表达式中使用空的字符集 []
         */
        "no-empty-character-class": "error",
        /**
         * 禁止将 catch 的第一个参数 error 重新赋值
         */
        "no-ex-assign": "error",
        /**
         * 禁止不必要的布尔类型转换
         */
        "no-extra-boolean-cast": "error",
        /**
         * 禁止将一个函数声明重新赋值
         */
        "no-func-assign": "error",
        /**
         * 禁止在 if 代码块内出现函数声明
         */
        "no-inner-declarations": [
            "error",
            "both"
        ],
        /**
         * 禁止在 RegExp 构造函数中出现非法的正则表达式
         */
        "no-invalid-regexp": "error",
        /**
         * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
         */
        "no-irregular-whitespace": [
            "error",
            {
                "skipStrings": true,
                "skipComments": false,
                "skipRegExps": true,
                "skipTemplates": true
            }
        ],
        /**
         * 禁止将 Math, JSON 或 Reflect 直接作为函数调用
         */
        "no-obj-calls": "error",
        /**
         * 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
         * @reason hasOwnProperty 比较常用
         */
        "no-prototype-builtins": "off",
        /**
         * 禁止在正则表达式中出现连续的空格
         */
        "no-regex-spaces": "error",
        /**
         * 禁止在数组中出现连续的逗号
         */
        "no-sparse-arrays": "error",
        /**
         * 禁止在普通字符串中出现模版字符串里的变量形式
         */
        "no-template-curly-in-string": "error",
        /**
         * 禁止在 return, throw, break 或 continue 之后还有代码
         */
        "no-unreachable": "error",
        /**
         * 禁止在 finally 中出现 return, throw, break 或 continue
         * @reason finally 中的语句会在 try 之前执行
         */
        "no-unsafe-finally": "error",
        /**
         * 禁止在 in 或 instanceof 操作符的左侧变量前使用感叹号
         */
        "no-unsafe-negation": "error",
        /**
         * 必须使用 isNaN(foo) 而不是 foo === NaN
         */
        "use-isnan": "error",
        /**
         * typeof 表达式比较的对象必须是 "undefined", "object", "boolean", "number", "string", "function", "symbol", 或 "bigint"
         */
        "valid-typeof": "error",
        /**
         * setter 必须有对应的 getter，getter 可以没有对应的 setter
         */
        "accessor-pairs": [
            "error",
            {
                "setWithoutGet": true,
                "getWithoutSet": false
            }
        ],
        /**
         * 数组的方法除了 forEach 之外，回调函数必须有返回值
         */
        "array-callback-return": "error",
        /**
         * 将 var 定义的变量视为块作用域，禁止在块外使用
         * @reason 已经禁止使用 var 了
         */
        "block-scoped-var": "off",
        /**
         * 在类的非静态方法中，必须存在对 this 的引用
         */
        "class-methods-use-this": "off",
        /**
         * 禁止函数的循环复杂度超过 20
         * @reason https://en.wikipedia.org/wiki/Cyclomatic_complexity
         */
        "complexity": [
            "error",
            {
                "max": 20
            }
        ],
        /**
         * 禁止函数在不同分支返回不同类型的值
         * @reason 缺少 TypeScript 的支持，类型判断是不准确的
         */
        "consistent-return": "off",
        /**
         * 强制所有控制语句使用一致的括号风格, if、else、for、while、do
         */
        "curly": "error",
        /**
         * switch 语句必须有 default
         */
        "default-case": "error",
        /**
         * 点跟着属性换行
         */
        "dot-location": [
            "error",
            "property"
        ],
        /**
         * 必须使用 === 或 !==，禁止使用 == 或 !=
         */
        "eqeqeq": [
            "error",
            "always"
        ],
        /**
         * for in 内部必须有 hasOwnProperty
         */
        "guard-for-in": "off",
        /**
         * 禁止使用 caller 或 callee
         * @reason 它们是已废弃的语法
         */
        "no-caller": "error",
        /**
         * switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
         */
        "no-case-declarations": "error",
        /**
         * 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
         */
        "no-div-regex": "error",
        /**
         * 禁止 if 语句中 return 语句之后有 else 块
         */
        "no-else-return": "off",
        /**
         * 不允许有空函数
         * @reason 有时需要将一个空函数设置为某个项的默认值
         */
        "no-empty-function": "off",
        /**
         * 禁止解构赋值中出现空 {} 或 []
         */
        "no-empty-pattern": "error",
        /**
         * 禁止使用 foo == null，必须使用 foo === null
         */
        "no-eq-null": "error",
        /**
         * 禁止使用 eval
         */
        "no-eval": "error",
        /**
         * 禁止修改原生对象
         * @reason 修改原生对象可能会与将来版本的 js 冲突
         */
        "no-extend-native": "error",
        /**
         * 禁止出现没必要的 bind
         */
        "no-extra-bind": "error",
        /**
         * 禁止出现没必要的 label
         */
        "no-extra-label": "off",
        /**
         * switch 的 case 内必须有 break, return 或 throw，空的 case 除外
         */
        "no-fallthrough": "error",
        /**
         * 禁止数字字面量中使用前导和末尾小数点
         */
        "no-floating-decimal": "error",
        /**
         * 禁止对全局变量赋值
         */
        "no-global-assign": "error",
        /**
         * 禁止使用短符号进行类型转换
         */
        "no-implicit-coercion": "off",
        /**
         * 禁止在全局作用域下定义变量或申明函数
         * @reason 模块化之后，不会出现这种在全局作用域下定义变量的情况
         */
        "no-implicit-globals": "off",
        /**
         * 禁止在 setTimeout 或 setInterval 中传入字符串
         */
        "no-implied-eval": "error",
        /**
         * 禁止在类之外的地方使用 this
         * @reason 只允许在 class 中使用 this
         */
        "no-invalid-this": "error",
        /**
         * 禁止使用 __iterator__
         * @reason __iterator__ 是一个已废弃的属性
         * 使用 [Symbol.iterator] 替代它
         */
        "no-iterator": "error",
        /**
         * 禁止使用 label
         */
        "no-labels": "error",
        /**
         * 禁止使用没必要的 {} 作为代码块
         */
        "no-lone-blocks": "error",
        /**
         * 禁止在循环内的函数内部出现循环体条件语句中定义的变量
         */
        "no-loop-func": "off",
        /**
         * 禁止使用 magic numbers
         */
        "no-magic-numbers": "off",
        /**
         * 禁止使用多个空格
         */
        "no-multi-spaces": "error",
        /**
         * 禁止使用 \ 来换行字符串
         */
        "no-multi-str": "error",
        /**
         * 禁止直接 new 一个类而不赋值
         * @reason new 应该作为创建一个类的实例的方法，所以不能不赋值
         */
        "no-new": "error",
        /**
         * 禁止使用 new Function
         * @reason 这和 eval 是等价的
         */
        "no-new-func": "error",
        /**
         * 禁止使用 new 来生成 String, Number 或 Boolean
         */
        "no-new-wrappers": "error",
        /**
         * 禁止使用 0 开头的数字表示八进制数
         */
        "no-octal": "error",
        /**
         * 禁止使用八进制的转义符
         */
        "no-octal-escape": "error",
        /**
         * 禁止对函数的参数重新赋值
         */
        "no-param-reassign": "error",
        /**
         * 禁止使用 __proto__
         * @reason __proto__ 是已废弃的语法
         */
        "no-proto": "error",
        /**
         * 禁止重复定义变量
         */
        "no-redeclare": "error",
        /**
         * 禁止使用指定的对象属性
         */
        "no-restricted-properties": "off",
        /**
         * 禁止在 return 语句里赋值
         */
        "no-return-assign": [
            "error",
            "always"
        ],
        /**
         * 禁止在 return 语句里使用 await
         */
        "no-return-await": "error",
        /**
         * 禁止出现 location.href = "javascript:void(0)";
         * @reason 有些场景下还是需要用到这个
         */
        "no-script-url": "off",
        /**
         * 禁止将自己赋值给自己
         */
        "no-self-assign": "error",
        /**
         * 禁止将自己与自己比较
         */
        "no-self-compare": "error",
        /**
         * 禁止使用逗号操作符
         */
        "no-sequences": "error",
        /**
         * 禁止 throw 字面量，必须 throw 一个 Error 对象
         */
        "no-throw-literal": "error",
        /**
         * 循环内必须对循环条件中的变量有修改
         */
        "no-unmodified-loop-condition": "error",
        /**
         * 禁止无用的表达式
         */
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true,
                "allowTernary": true,
                "allowTaggedTemplates": true
            }
        ],
        /**
         * 禁止出现没用到的 label
         * @reason 已经禁止使用 label 了
         */
        "no-unused-labels": "off",
        /**
         * 禁止出现没必要的 call 或 apply
         */
        "no-useless-call": "error",
        /**
         * 禁止出现没必要的字符串连接
         */
        "no-useless-concat": "error",
        /**
         * 禁止出现没必要的转义
         */
        "no-useless-escape": "error",
        /**
         * 禁止没必要的 return
         */
        "no-useless-return": "error",
        /**
         * 禁止使用 void
         */
        "no-void": "error",
        /**
         * 禁止注释中出现 TODO 和 FIXME
         */
        "no-warning-comments": "off",
        /**
         * 禁止使用 with
         */
        "no-with": "error",
        /**
         * Promise 的 reject 中必须传入 Error 对象，而不是字面量
         */
        "prefer-promise-reject-errors": "error",
        /**
         * parseInt 必须传入第二个参数
         */
        "radix": "error",
        /**
         * async 函数中必须存在 await 语句
         */
        "require-await": "error",
        /**
         * var 必须在作用域的最前面
         */
        "vars-on-top": "off",
        /**
         * 要求 IIFE 使用括号括起来
         */
        "wrap-iife": "off",
        /**
         * 必须使用 if (foo === 5) 而不是 if (5 === foo)
         */
        "yoda": [
            "error",
            "never"
        ],
        /**
         * 禁止使用 "strict"，除了全局统一;
         */
        "strict": [
            "error",
            "global"
        ],
        /**
         * 变量必须在定义的时候赋值
         */
        "init-declarations": "off",
        /**
         * 禁止 catch 子句的参数与外层作用域中的变量同名
         */
        "no-catch-shadow": "off",
        /**
         * 禁止对一个变量使用 delete
         */
        "no-delete-var": "error",
        /**
         * 禁止 label 名称与已定义的变量重复
         * @reason 已经禁止使用 label 了
         */
        "no-label-var": "off",
        /**
         * 禁止使用指定的全局变量
         */
        "no-restricted-globals": "off",
        /**
         * 禁止变量名与上层作用域内的已定义的变量重复
         * @reason 很多时候函数的形参和传参是同名的
         */
        "no-shadow": "off",
        /**
         * 禁止使用保留字作为变量名
         */
        "no-shadow-restricted-names": "error",
        /**
         * 禁止使用未定义的变量
         */
        "no-undef": "error",
        /**
         * 禁止将 undefined 赋值给变量
         */
        "no-undef-init": "error",
        /**
         * 禁止使用 undefined
         */
        "no-undefined": "off",
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "none",
                "ignoreRestSiblings": false,
                "caughtErrors": "none"
            }
        ],
        /**
         * 变量必须先定义后使用
         */
        "no-use-before-define": [
            "error",
            {
                "variables": false,
                "functions": false,
                "classes": false
            }
        ],
        /**
         * callback 之后必须立即 return
         */
        "callback-return": "off",
        /**
         * require 必须在全局作用域下
         */
        "global-require": "off",
        /**
         * callback 中的 err 必须被处理
         * @reason 它是通过字符串匹配来判断函数参数 err 的，不准确
         */
        "handle-callback-err": "off",
        /**
         * 禁止直接使用 Buffer
         * @reason Buffer 构造函数是已废弃的语法
         */
        "no-buffer-constructor": "error",
        /**
         * 相同类型的 require 必须放在一起
         */
        "no-mixed-requires": "off",
        /**
         * 禁止直接 new require("foo")
         */
        "no-new-require": "error",
        /**
         * 禁止对 __dirname 或 __filename 使用字符串连接
         * @reason 不同平台下的路径符号不一致，建议使用 path 处理平台差异性
         */
        "no-path-concat": "error",
        /**
         * 禁止使用 process.env.NODE_ENV
         */
        "no-process-env": "off",
        /**
         * 禁止使用 process.exit(0)
         */
        "no-process-exit": "off",
        /**
         * 禁止使用指定的模块
         */
        "no-restricted-modules": "off",
        /**
         * 禁止使用 node 中的同步的方法，比如 fs.readFileSync
         */
        "no-sync": "off",
        /**
         *  (默认) 如果数组元素内或元素间有换行，则要求换行。如果为 false，该条件不生效。
         */
        "array-bracket-newline": [
            "error",
            {
                "multiline": true
            }
        ],
        /**
         * (默认) 禁止在数组括号内出现空格
         */
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        /**
         * 元素视长度自由控制换行，不强制
         */
        "array-element-newline": "off",
        /**
         * （默认）大括号后要求使用一个或多个空格
         */
        "block-spacing": "error",
        /**
         * 在function，if，try等方法后使用统一的括号风格
         */
        "brace-style": "error",
        /**
         * 变量名使用驼峰命名
         */
        "camelcase": "error",
        /**
         * 注释必须大写开头，通常是中文，所以不用了
         */
        "capitalized-comments": "off",
        /**
         * 禁用拖尾逗号
         */
        "comma-dangle": [
            "error",
            "never"
        ],
        /**
         * 逗号前不空格，后空格
         */
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        /**
         * 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
         */
        "comma-style": [
            "error",
            "last"
        ],
        /**
         *  (默认) 禁止在计算属性内使用空格
         */
        "computed-property-spacing": [
            "error",
            "never"
        ],
        /**
         *  指定一个变量作为 this 的别名
         */
        "consistent-this": "off",
        /**
         *  (默认) 强制使用换行 (LF)
         */
        "eol-last": [
            "error",
            "always"
        ],
        /**
         *  (默认) 禁止在函数名和开括号之间有空格
         */
        "func-call-spacing": [
            "error",
            "never"
        ],
        /**
         *  (默认) 函数名与赋值给它们的变量名或属性名相匹配
         */
        "func-name-matching": [
            "error",
            "always"
        ],
        /**
         *  要求函数表达式有一个名字？不强求
         */
        "func-names": "off",
        /**
         *  强制一致地使用 function 声明或表达式？不强求
         */
        "func-style": "off",
        /**
         *  (默认) 如果函数的任一参数有换行，则要求在函数括号内换行。否则禁止换行。
         */
        "function-paren-newline": [
            "error",
            "multiline"
        ],
        /**
         *  禁用指定的标识符
         */
        "id-blacklist": "off",
        /**
         *  强制标识符的最小和最大长度
         */
        "id-length": "off",
        /**
         *  赋值语句和 function 定义中的标识符匹配某个特定的正则表达式。
         */
        "id-match": "off",
        /**
         * (默认) 禁止在箭头函数体之前出现换行
         */
        "implicit-arrow-linebreak": [
            "error",
            "beside"
        ],
        /**
         *  四个空格缩进
         */
        "indent": [
            "error",
            4
        ],
        /**
         *  强制所有不包含单引号的 JSX 属性值使用单引号
         */
        "jsx-quotes": [
            "error",
            "prefer-single"
        ],
        /**
         *  强制在冒号后只有一个空格
         */
        "key-spacing": [
            "error",
            {
                "mode": "strict"
            }
        ],
        /**
         *  关键字和类似关键字的符号前后均有空格
         */
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        /**
         *  注释之前或之后是否应该有空行，不强制
         */
        "lines-around-comment": "off",
        /**
         *  (默认) 要求在类成员之后有一行空行
         */
        "lines-between-class-members": [
            "error",
            "always"
        ],
        /**
         *  强制块语句的最大可嵌套深度
         */
        "max-depth": "off",
        /**
         *  强制一行的最大长度
         */
        "max-len": "off",
        /**
         *  强制一个文件的最大行数
         */
        "max-lines": "off",
        /**
         *  强制回调函数最大嵌套深度
         */
        "max-nested-callbacks": "off",
        /**
         *  强制函数定义中最大参数个数
         */
        "max-params": "off",
        /**
         *  指定一个函数中所允许允许的最大语句数量
         */
        "max-statements": "off",
        /**
         *  强制每一行中所允许的最大语句数量为1
         */
        "max-statements-per-line": [
            "error",
            {
                "max": 1
            }
        ],
        /**
         *  多行注释强制使用一中特定的风格，注释不强求了
         */
        "multiline-comment-style": "off",
        /**
         *  要求或禁止在三元操作数中间换行，看表达式长度自行决定
         */
        "multiline-ternary": "off",
        /**
         *  构造函数名首字母大写
         */
        "new-cap": "error",
        /**
         *  要求调用无参构造函数时有圆括号
         */
        "new-parens": "error",
        /**
         *  方法链中的每个调用之后或或深度成员访问之后有一个换行符
         */
        "newline-per-chained-call": [
            "error",
            {
                "ignoreChainWithDepth": 2
            }
        ],
        /**
         *  通常不允许使用 Array的构造函数来创建数组。唯一的例外是通过给构造函数传入指定的一个数值来创建稀疏数组
         */
        "no-array-constructor": "error",
        /**
         *  禁止位运算，通常是不用，但没必要禁止
         */
        "no-bitwise": "off",
        /**
         *  禁止使用 continue 语句
         */
        "no-continue": "error",
        /**
         *  禁止注释和代码出现在同一行
         */
        "no-inline-comments": "off",
        /**
         *  禁止 if 语句作为唯一语句出现在 else 语句块中
         */
        "no-lonely-if": "error",
        /**
         *  禁止混合使用不同的操作符
         */
        "no-mixed-operators": [
            "error",
            {
                "groups": [
                    ["&", "|", "^", "~", "<<", ">>", ">>>"],
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"]
                ],
                "allowSamePrecedence": true
            }
        ],
        /**
         *  禁止空格和 tab 的混合缩进
         */
        "no-mixed-spaces-and-tabs": "error",
        /**
         *  禁止在单行语句中使用多个赋值
         */
        "no-multi-assign": "error",
        /**
         *  禁用否定的表达式
         */
        "no-negated-condition": "error",
        /**
         *  禁止使用嵌套的三元表达式
         */
        // "no-nested-ternary": "error",
        /**
         *  禁止使用嵌套的三元表达式
         */
        "no-new-object": "error",
        /**
         *  禁用一元操作符 ++ 和 --，还挺常用的
         */
        "no-plusplus": "off",
        /**
         *  禁用特定的语法
         */
        "no-restricted-syntax": "off",
        /**
         *  禁用 tab
         */
        "no-tabs": "off",
        /**
         *  禁止使用三元操作符
         */
        "no-ternary": "off",
        /**
         *  禁止使用行尾空白（空格、tab 和其它 Unicode 空白字符）
         */
        "no-trailing-spaces": "error",
        /**
         *  禁止标识符中有悬空下划线
         */
        "no-underscore-dangle": "off",
        /**
         *  当有更简单的结构可以代替三元操作符时，该规则禁止使用三元操作符
         */
        "no-unneeded-ternary": "error",
        /**
         *  禁止属性前有空白
         */
        "no-whitespace-before-property": "error",
        /**
         *  强制单个语句的位置，参考'curly'，不允许单个语句
         */
        "nonblock-statement-body-position": "off",
        /**
         *  如果在属性内部或属性之间有换行符，就要求有换行符
         */
        "object-curly-newline": [
            "error",
            {
                "multiline": true
            }
        ],
        /**
         *  要求每个作用域有多个变量声明
         */
        "one-var": [
            "error",
            "never"
        ],
        /**
         *  强制每个变量初始化语句换行，因为 'one-var' 已经规定了
         */
        "one-var-declaration-per-line": "off",
        /**
         *  (默认) 要求尽可能地简化赋值操作
         */
        "operator-assignment": [
            "error",
            "always"
        ],
        /**
         *  要求把换行符放在操作符前面
         */
        "operator-linebreak": [
            "error",
            "before"
        ],
        /**
         *  要求块语句和类的开始或末尾有空行，看着难受，不要
         */
        "padded-blocks": "off",
        /**
         *  要求或禁止在语句间填充空行
         */
        "padding-line-between-statements": "off",
        /**
         *  (默认) 要求对象字面量属性名称都使用引号
         */
        "quote-props": [
            "error",
            "always"
        ],
        /**
         *  要求尽可能地使用单引号
         */
        "quotes": [
            "error",
            "single"
        ],
        /**
         *  要求使用 JSDoc 注释
         */
        "require-jsdoc": "off",
        /**
         *  禁止在语句末尾使用分号 (除了消除以 [、(、/、+ 或 - 开始的语句的歧义)
         */
        "semi": [
            "error",
            "never"
        ],
        /**
         *  分号旁的空格，默认选项为 {"before": false, "after": true}
         */
        "semi-spacing": "error",
        /**
         *  (默认) 强制分号出现在句子末尾
         */
        "semi-style": [
            "error",
            "last"
        ],
        /**
         *  要求对象属性按序排列
         */
        "sort-keys": "off",
        /**
         *  检查所有的变量声明块，并验证所有的变量都是按字母顺序排序的
         */
        "sort-vars": [
            "error",
            {
                "ignoreCase": true
            }
        ],
        /**
         *  块语句必须总是至少有一个前置空格
         */
        "space-before-blocks": "error",
        /**
         *  强制在 function的左括号之前使用一致的空格
         */
        "space-before-function-paren": [
            "error",
            "never"
        ],
        /**
         *  块语句必须总是至少有一个前置空格
         */
        "space-in-parens": [
            "error",
            "never"
        ],
        /**
         *  中缀运算符周围有空格
         */
        "space-infix-ops": "error",
        /**
         *  注释块 // 或 /* 必须跟随至少一个空白
         */
        "spaced-comment": [
            "error",
            "always"
        ],
        /**
         *  要求switch case冒号之后有一个空格。
         */
        "switch-colon-spacing": "error",
        /**
         *  要求switch case冒号之后有一个空格。
         */
        "template-tag-spacing": "error",
        /**
         *  要求或禁止 Unicode 字节顺序标记 (BOM)
         */
        "unicode-bom": "off",
        /**
         *  要求正则表达式被括号括起来
         */
        "wrap-regex": "off",
        /**
         *  当箭头函数大括号是可以省略的，强制不使用它们 (默认)
         */
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        /**
         *  (默认) 要求在所有情况下使用圆括号将参数括起来
         */
        "arrow-parens": [
            "error",
            "always"
        ],
        /**
         *  (默认) 规范化箭头函数的箭头(=>)之前或之后的空格
         */
        "arrow-spacing": "error",
        /**
         *  派生类中的构造函数必须调用 super()。非派生类的构造函数不能调用 super()
         */
        "constructor-super": "error",
        /**
         *  强制在 * 和 function 关键字之间有空格
         */
        "generator-star-spacing": [
            "error",
            {
                "before": true,
                "after": false
            }
        ],
        /**
         *  禁止修改类声明的变量
         */
        "no-class-assign": "error",
        /**
         *  禁止在可能与比较操作符相混淆的地方使用箭头函数
         */
        "no-confusing-arrow": [
            "error",
            {
                "allowParens": true
            }
        ],
        /**
         *  禁止修改 const 声明的变量
         */
        "no-const-assign": "error",
        /**
         *  禁止类成员中出现重复的名称
         */
        "no-dupe-class-members": "error",
        /**
         *  禁止使用指定的 import 加载的模块
         */
        "no-duplicate-imports": "error",
        /**
         *  禁止在构造函数中，在调用 super() 之前使用 this 或 super
         */
        "no-this-before-super": "error",
        /**
         *  禁止使用不必要的计算属性
         */
        "no-useless-computed-key": "error",
        /**
         *  禁用不必要的构造函数
         */
        "no-useless-constructor": "error",
        /**
         *  禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
         */
        "no-useless-rename": "error",
        /**
         *  阻止 var 的使用，推荐使用 const 或 let
         */
        "no-var": "error",
        /**
         *  要求或禁止对象字面量中方法和属性使用简写语法
         */
        "object-shorthand": "off",
        /**
         *  要求回调函数使用箭头函数
         */
        "prefer-arrow-callback": "error",
        /**
         *  要求使用 const 声明那些声明后不再被修改的变量
         */
        "prefer-const": "error",
        /**
         *  优先使用数组和对象解构
         */
        "prefer-destructuring": "off",
        /**
         *  禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
         */
        "prefer-numeric-literals": "off",
        /**
         *  要求使用剩余参数而不是 arguments
         */
        "prefer-rest-params": "error",
        /**
         *  要求使用扩展运算符而非 .apply()
         */
        "prefer-spread": "error",
        /**
         *  要求使用模板字面量而非字符串连接
         */
        "prefer-template": "error",
        /**
         *  要求 generator 函数内有 yield
         */
        "require-yield": "error",
        /**
         *  强制剩余和扩展运算符及其表达式之间无空格
         */
        "rest-spread-spacing": [
            "error",
            "never"
        ],
        /**
         *  强制模块内的 import 排序
         */
        "sort-imports": "off",
        /**
         *  要求 symbol 描述
         */
        "symbol-description": "off",
        /**
         *  禁止模板字符串中的嵌入表达式周围空格的使用
         */
        "template-curly-spacing": "error",
        /**
         *  强制在 yield* 表达式中 * 周围使用空格
         */
        "yield-star-spacing": [
            "error",
            "before"
        ],
        "vue/html-indent": [
            "error",
            4,
            {
                "attribute": 1,
                "baseIndent": 1,
                "closeBracket": 0,
                "alignAttributesVertically": true,
                "ignores": []
            }
        ],
        "vue/max-attributes-per-line": [
            "error",
            {
                "singleline": 4,
                "multiline": {
                    "max": 1,
                    "allowFirstLine": true
                }
            }
        ],
        "vue/singleline-html-element-content-newline": [
            "off",
            {
                "ignoreWhenNoAttributes": true,
                "ignoreWhenEmpty": true,
                "ignores": [
                    "pre",
                    "textarea"
                ]
            }
        ],
        "vue/html-closing-bracket-spacing": [
            "error",
            {
                "startTag": "never",
                "endTag": "never",
                "selfClosingTag": "always"
            }
        ],
        "vue/html-self-closing": [
            "error",
            {
                "html": {
                    "normal": "never",
                    "void": "always",
                    "component": "always"
                },
                "svg": "always",
                "math": "always"
            }
        ]
    }
}

