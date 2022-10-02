(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{282:function(t,a,s){"use strict";s.r(a);var _=s(13),r=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-note"}},[t._v("#")]),t._v(" mysql-note")]),t._v(" "),a("h2",{attrs:{id:"事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[t._v("#")]),t._v(" 事务")]),t._v(" "),a("h3",{attrs:{id:"事务的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务的概念"}},[t._v("#")]),t._v(" 事务的概念")]),t._v(" "),a("blockquote",[a("p",[t._v("事务（Transaction）是一个操作序列。")]),t._v(" "),a("p",[t._v("这些操作要么都做，要么都不做，是一个不可分割的工作单位。事务通常以BEGIN TRANSACTION开始，以COMMIT或ROLLBACK操作结束")]),t._v(" "),a("p",[t._v("事务是数据库系统区别于文件系统的重要特性之一。")])]),t._v(" "),a("p",[t._v("事务的特性：")]),t._v(" "),a("ul",[a("li",[t._v("原子性：事务中包括的所有操作要么都做，要么不做。")]),t._v(" "),a("li",[t._v("一致性：事务必须是使数据库从一个一致性状态变到另一个一致性状态。")]),t._v(" "),a("li",[t._v("隔离性：一个事务内部的操作及使用的数据对并发的其他事务是隔离的。")]),t._v(" "),a("li",[t._v("持久性：事务一旦提交，对数据库的改变是永久的。")])]),t._v(" "),a("h3",{attrs:{id:"事务的四种隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务的四种隔离级别"}},[t._v("#")]),t._v(" 事务的四种隔离级别")]),t._v(" "),a("p",[t._v("隔离级别越来越高，但是数据库的并发性能越来越差")]),t._v(" "),a("ol",[a("li",[t._v("未提交读\n所有事务都可以看到其他未提交事务的执行结果\n"),a("strong",[t._v("脏读、不可重复读、幻读")])]),t._v(" "),a("li",[t._v("提交读\n一个事务只能看见已经提交事务所做的改变。\n"),a("strong",[t._v("不可重复读、幻读")])]),t._v(" "),a("li",[t._v("可重复读\n同一个事务在多次读取同样数据的时候得到的结果相同\n"),a("strong",[t._v("幻读")])]),t._v(" "),a("li",[t._v("序列化\n用户之间通过一个接一个顺序地执行当前的事务。\n在每个读的数据行上加上共享锁。在此级别，可能出现大量的超时现象和锁竞争。")])]),t._v(" "),a("blockquote",[a("p",[t._v("MySQL数据库中的InnoDB和Falcon存储引擎通过MVCC（Multi-Version Concurrent Control，多版本并发控制）机制解决了该问题。需要注意的是，"),a("strong",[t._v("多版本只是解决不可重复读问题")]),t._v("，而加上间隙锁（也就是它这里所谓的并发控制）才解决了幻读问题。")])]),t._v(" "),a("h4",{attrs:{id:"脏读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脏读"}},[t._v("#")]),t._v(" 脏读")]),t._v(" "),a("p",[t._v("发顺丰是")]),t._v(" "),a("h3",{attrs:{id:"mysql-中的事务隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-中的事务隔离级别"}},[t._v("#")]),t._v(" MySQL 中的事务隔离级别")]),t._v(" "),a("ul",[a("li",[t._v("Read Uncommitted")]),t._v(" "),a("li",[t._v("Read Committed")]),t._v(" "),a("li",[t._v("Repeatable Read （默认）")]),t._v(" "),a("li",[t._v("Serializable")])]),t._v(" "),a("p",[t._v("可以设置"),a("strong",[t._v("系统级别")]),t._v("或"),a("strong",[t._v("会话级别")]),t._v("的隔离。")]),t._v(" "),a("p",[t._v("查询（Mysql8）")]),t._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SELECT @@transaction_isolation;\nSELECT @@global.transaction_isolation;\n")])])]),a("p",[t._v("设置（Mysql8）")]),t._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSET GLOBAL TRANSACTION ISOLATION LEVEL REPEATABLE READ;\n")])])]),a("blockquote",[a("p",[t._v("Oracle 中只支持"),a("strong",[t._v("提交读")]),t._v("和"),a("strong",[t._v("可串行化")]),t._v("，不存在脏读")]),t._v(" "),a("p",[t._v("默认级别是"),a("strong",[t._v("提交读")])])]),t._v(" "),a("h2",{attrs:{id:"操作表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作表"}},[t._v("#")]),t._v(" 操作表")]),t._v(" "),a("p",[t._v("插入一列")]),t._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("alter table TABLE_NAME add column NEW_COLUMN_NAME varchar(20) not null;\n\nalter table TABLE_NAME add column NEW_COLUMN_NAME varchar(20) not null after COLUMN_NAME;\n\nalter table TABLE_NAME add column NEW_COLUMN_NAME varchar(20) not null first;\n")])])]),a("p",[t._v("重置自动递增")]),t._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("USE sblog;\n\nALTER TABLE tag AUTO_INCREMENT = 6;\n\nINSERT INTO tag(title, slug) VALUES('测试2','测试2'), ('测试3','测试3');\n")])])]),a("h2",{attrs:{id:"基本类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本类型"}},[t._v("#")]),t._v(" 基本类型")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/m0_52982868/article/details/123032241",target:"_blank",rel:"noopener noreferrer"}},[t._v("(117条消息) MySQL数据类型_小猪.get的博客-CSDN博客_mysql 数据类型"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);