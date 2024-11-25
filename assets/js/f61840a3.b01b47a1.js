"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[62615],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,g=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return a?o.createElement(g,s(s({ref:t},p),{},{components:a})):o.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:n,s[1]=r;for(var u=2;u<i;u++)s[u]=a[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},219:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));const i={title:"The Faces Behind Open Source Projects: Tim Jones and pg-boss",authors:["milica"],image:"/img/os-interviews/pg-boss-banner.jpeg",tags:["webdev","postgresql","database","os-maintainers"]},s=void 0,r={permalink:"/blog/2024/09/03/OS-builders-interview-with-tim-jones-pgboss",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2024-09-03-OS-builders-interview-with-tim-jones-pgboss.md",source:"@site/blog/2024-09-03-OS-builders-interview-with-tim-jones-pgboss.md",title:"The Faces Behind Open Source Projects: Tim Jones and pg-boss",description:"wasps interviewing Tim",date:"2024-09-03T00:00:00.000Z",formattedDate:"September 3, 2024",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"postgresql",permalink:"/blog/tags/postgresql"},{label:"database",permalink:"/blog/tags/database"},{label:"os-maintainers",permalink:"/blog/tags/os-maintainers"}],readingTime:12.755,hasTruncateMarker:!1,authors:[{name:"Milica Maksimovi\u0107",title:"Growth @wasp",url:"https://mmaksimovic.dev/",imageURL:"https://github.com/mmaksimovic.png",key:"milica"}],frontMatter:{title:"The Faces Behind Open Source Projects: Tim Jones and pg-boss",authors:["milica"],image:"/img/os-interviews/pg-boss-banner.jpeg",tags:["webdev","postgresql","database","os-maintainers"]},prevItem:{title:"Built in Days, Acquired for $20K: The NuloApp Story",permalink:"/blog/2024/09/17/from-idea-to-20k-in-days-how-wasp-accelerated-nuloapps-launch"},nextItem:{title:"Wasp: The JavaScript Answer to Django for Web Development",permalink:"/blog/2024/08/20/django-vs-wasp"}},l={authorsImageUrls:[void 0]},u=[],p={toc:u},c="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"wasps interviewing Tim",src:a(8838).Z,width:"1007",height:"420"})),(0,n.kt)("p",null,"We\u2019re launching a new series of posts where we'll sit down with the folks who help us run our projects without expecting anyting in return. Yes, we're talking about open-source maintainers and builders, the people who dedicate their free time to make tech better. This is our way to say \"Thank you!\" to all of those who help us build and improve ",(0,n.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/"},"Wasp"),", as well as shape the webdev ecosystem."),(0,n.kt)("p",null,"In our first post, we had the chance to chat with Tim, the maintainer of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/timgit/pg-boss"},"pg-boss"),", a library that makes managing job queues in PostgreSQL a breeze. We talked about what it\u2019s like to maintain an open-source project, the ups and downs, and why Tim keeps coming back to make pg-boss better. If you\u2019ve ever relied on open-source tools, this series is for you."),(0,n.kt)("p",null,"Let's dive in!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Please tell us a little bit about yourself. When and how did you get introduced to coding?"))),(0,n.kt)("p",null,"I was first introduced to coding in grade school with Logo in the 80s. I built my first website on GeoCities in 97, then started coding professionally with Visual Basic in MS Access during the Y2K craze. I built my first multi-tenant SaaS app (an extranet) in 2002 before it was cool using Classic ASP. I spent at least a decade in C# coding web apps most of the time before finally settling down in the warm embrace of full stack JavaScript with Node.js for the last 10 years."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Could you introduce us to pg-boss? Was there a reason or use case you had for creating it?"))),(0,n.kt)("p",null,"I joined a startup in 2015 and we needed an open source relational database so Mongo would stop ruining our lives. I had heard good things about Postgres, so I was excited to give it a chance. Our product also included Redis, but only for the purpose of hosting a job queue via the Kue package. This seemed excessive to manage another piece of infrastructure for a queue, especially for our low-volume requirements. I hadn\u2019t used Redis before, so I started researching it."),(0,n.kt)("p",null,"I learned that Redis is a great choice when you need a fast, in-memory database. However, a job queue is a different use case, where you are guaranteeing to someone: \u201cI promise to do this later\u201d. If your Redis server crashes, you could lose a lot of jobs with the default configuration. Their persistence documentation even states, \u201cif you want a degree of data safety comparable to what PostgreSQL can provide you\u201d, you should use both RDB and AOF configurations. Within AOF, there is an option, \u201cappendfsync always\u201d, but it\u2019s generally discouraged with warnings of poor performance. The recommended configuration is almost always \u201ceverysec\u201d, but with the disclaimer, \u201cyou may lose 1 second of data if there is a disaster\u201d. These warnings about safety should cause anyone in technical leadership to pause and ask some questions."),(0,n.kt)("p",null,"Even now in 2024 Redis seems to be the dominant queue persistence database in OSS, but it wasn\u2019t designed to match the use case of a guaranteed job delivery system. Seeing the growth of open source Postgres-backed queues makes me optimistic that over time more development teams realize this mismatch and we\u2019ll see a decline in popularity of the Redis queue projects. If your product relies on Redis for its queue, I encourage you to review your disaster recovery plans and server configurations. It\u2019s concerning that the popularity of the \u201cjust use Redis for your queue\u201d is likely producing a large population of applications vulnerable to losing jobs."),(0,n.kt)("p",null,"In 2015, the number 1 hit on Google for \u201cPostgres job queue\u201d was Brandur Leach\u2019s \u201cPostgres Job Queues & Failure By MVCC\u201d blog post. LOL! The Internet replied with \u201cdon\u2019t do this\u201d. However, at this same point in time Postgres 9.5 was in beta and about to be released, and lo and behold a new core feature was added called SKIP LOCKED. This looked like a perfect fit, but it was too new for any packages to have this approach. After a successful prototype, I thought it seemed like a good opportunity to try creating the package myself, since I was new to Node and wanted to learn more about it. I started building it on nights and weekends, shipped version 0.0.1 in early 2016 then finally released 1.0 a year later."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"How do you manage contributions and feature requests?"))),(0,n.kt)("p",null,"The best thing about OSS in my opinion is in its name: \u201copen\u201d. Having the entire world of developers not only use your software, but also be able to read its code and make contributions produces the highest quality code. You will get questions you never thought about, and find bugs you didn\u2019t know existed. In the case of bug fixes, most of the time it\u2019s as simple as making sure said bug has a new unit test then merging a pull request (PR)."),(0,n.kt)("p",null,"Managing feature requests is not easy, however. If you don\u2019t accept any contributions, it seems to violate the principle of OSS. If you accept every contribution, you risk the project drifting away from its original design or becoming too complicated. The balance between these extremes is evaluating each feature request against what seems to be best aligned with the core purpose of the project. This becomes a non-technical decision sometimes, and may result in a \u201clet\u2019s agree to disagree\u201d outcome. My desire is to try and merge all PRs that arrive, and I really appreciate all the contributors that have sent them. It\u2019s not fun saying \u201cno\u201d, because someone put in the coding effort and they felt strongly enough about it to spend their free time on your project."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"What are the unexpected challenges of managing a successful open-source project?"))),(0,n.kt)("p",null,"I did not expect how time-consuming managing an open source project would be. This is probably the primary reason projects become abandoned over time if they are supported by only 1 or a few developers. For example, you could have a perfectly functioning code base in Node 0.12, then decide to upgrade to async/await later and have to rewrite everything. The same applies to changing a test suite, assertion package, or even striving to attain 100% code coverage."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Using Postgres as a queue solution has become quite popular recently :) What are your thoughts on differences between pg-boss and e.g. pgmq?"))),(0,n.kt)("p",null,"This is encouraging to see. I learned about pgmq from this question. It looks like a great option for a pure SQL implementation as a Postgres extension. I haven\u2019t used it so I won\u2019t be able to offer a detailed comparison, but after a quick review I see it uses SKIP LOCKED and a partitioned job table, which are good baseline scalability requirements. Postgres extension version management is challenging, however, and usually involves database service restarts and downtime."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"What is the largest scale you\u2019ve seen or heard pg-boss used at? How scalable / how far can you go with running background jobs directly in pg?"))),(0,n.kt)("p",null,"In terms of job storage, we\u2019ve been able to store 2-3 million jobs in v9\u2019s shared job storage and survive, but not really thrive, as database performance starts to degrade. Before v10, in order to mitigate this you have to use configuration settings to move completed jobs into the archive more often."),(0,n.kt)("p",null,"Once record counts are under control, in terms of job throughput, the number of concurrent queries to Postgres can be very high, especially when using connection poolers and job batching. I have a speed test in the suite that can both fetch and then complete 10,000 jobs in 0.5 seconds, a metric you would not easily be able to achieve even in some dedicated queuing products. For job creation on the other hand, you have the full power of SQL available in Postgres via INSERT or even COPY."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"[Fun fact!]"),(0,n.kt)("p",{parentName:"admonition"},"Did you know that Wasp uses pg-boss under the hood? We built Wasp Jobs on top of pg-boss, and ",(0,n.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/blog/2022/06/15/jobs-feature-announcement"},"here's how we did it"),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"While pg-boss has many production use cases, is there a scenario or limit where teams may need a traditional queue instead?"))),(0,n.kt)("p",null,"Because of the limitations in v9, we use pg-boss and AWS SQS side by side. Some of our queues rely heavily on pg-boss\u2019s rate limiting and uniqueness features. We use SQS for queues that can grow very large quickly. Now that we\u2019ve upgraded to v10, we might consider switching back for cost reasons, since SQS is not cheap at this scale."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"There is a new version of ",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/timgit/pg-boss/releases/tag/10.0.0"},"pg-boss v10"),", what should people be excited about?"))),(0,n.kt)("p",null,"pg-boss v9 and below uses a shared job table across all queues. Once you run into the storage limitations mentioned earlier, all queues are affected. This is especially problematic since queues were also used internally for maintenance and scheduling. Maintenance controls archival, so if this queue can\u2019t be processed, it prevents pg-boss from auto-recovering from this via the retention policy."),(0,n.kt)("p",null,"The design goal in v10 was to mitigate this performance issue first by isolating each queue into a dedicated table via partitioning. If a queue were to become backlogged with millions of jobs, it would affect the performance of that queue only. Then, if needed, you could use the newly added deleteJob() function in your workers, inspired by AWS SQS, to keep the record count as low as possible."),(0,n.kt)("p",null,"Another very useful new feature is queue policies. Over the years there were several issues opened around worker concurrency, which added several functions and configuration which made the API more complicated and difficult to understand. For example, there was a function sendSingleton(), which behaved entirely different from a configuration option named enforceSingletonQueueActiveLimit. In v10, these were all removed in favor of queue policies. A couple of examples are \u201cshort\u201d queues, which only allow 1 pending job, no matter how many jobs are submitted, and \u201csingleton\u201d queues, which allow only 1 job to be active."),(0,n.kt)("p",null,"There are several other enhancements made to improve quality of life in v10:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All jobs have 2 retries enabled by default")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"FIPS compliant (dropped internal usage of MD5 hashing)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Replication support for HA or read-replicas (every table now has a primary key)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Serverless function supervision (maintain() function that can be run from another scheduler)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Postgres dependency-free (no pgcrypto extension needed uuid generation)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Dead letter queues (Replaces \u201ccompletion job\u201d feature and gains retry support for processing them)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"What are your thoughts on things like pg_render ",(0,n.kt)("a",{parentName:"strong",href:"https://www.madewithsupabase.com/p/pg-render"},"which is a way to render HTML in Postgres"),"? ",(0,n.kt)("a",{parentName:"strong",href:"https://www.madewithsupabase.com/p/pg-render"}),"Is that going too far?")))),(0,n.kt)("p",null,"Since I\u2019m a Postgres fan, it\u2019s hard for me to see how adding more capabilities to it would be considered \u201cgoing too far\u201d. This particular project appears to be a simple abstraction of other open source packages and could be a useful case study of creating a Postgres extension in Rust. Since this is compiled, it should even have better performance benchmarks over other packages with the same feature in non-compiled languages."),(0,n.kt)("p",null,"Overall, I agree with the argument for simplicity in Stephan Schmidt\u2019s article \u201cJust Use Postgres for Everything\u201d. The only issue with his article, which he continues to edit after all these years, is Stephan recommends River, a new OSS queue using SKIP LOCKED in Go, when we could have just mentioned little ole pg-boss that\u2019s been around for years. The irony is that River was built by Brandur \u201cdon\u2019t use Postgres queues\u201d Leach. I\u2019m kidding around here, of course, but who doesn\u2019t enjoy a bit of irony?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"What advice would you give to developers or companies who are thinking of open sourcing their projects?"))),(0,n.kt)("p",null,"For developers, I would encourage starting off by making a contribution to a package you use daily. For example, if you\u2019ve ever thought \u201cI like this package, but I think it could be better if it had this feature\u201d, that might be something you could add. If you have an idea of a new project, my advice would be to focus on the MVP (minimally viable product). The more features you add, the more time required to release it and the more maintenance required to keep it running. This is the primary reason I don\u2019t include a web API or UI with pg-boss, even though I\u2019m sure it would make it more popular."),(0,n.kt)("p",null,"For companies, I would point to successful startups that became popular and attracted funding because of their OSS projects. TimescaleDB, Supabase, and Citus are examples just from the Postgres ecosystem."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"What is the main reason you keep working on pg-boss? What do you get out of it?"))),(0,n.kt)("p",null,"It\u2019s nice to be able to change what type of development you do occasionally. It gives you a different perspective and usually gives you new insights into your primary job. When you have responsibility over a popular package, it also adds some motivation to make sure it remains healthy. It\u2019s not a good feeling when your package causes bad performance on a database server because of its own success (a large queue backlog could mean your company is growing). I did sign up for GitHub Sponsors a couple years ago, and I appreciate every company and developer that has benefited from pg-boss making contributions, but it\u2019s still far from being able to fund itself."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Have you ever thought of introducing a paid product on top of pg-boss? Why yes/no?"))),(0,n.kt)("p",null,"I haven\u2019t spent time evaluating what that would look like, but it is an intriguing idea for sure. If I was able to work on pg-boss full-time, there are several potential new concepts that could be explored now that partitioning and queue policies have been created."),(0,n.kt)("p",null,"For example, someone recently opened an issue to request arbitrary JSON querying capability to be included in fetch(). If done globally across all queues, this would require indexing the jsonb payload, which in some cases could be large, slowing down reads and writes. However, if applied only to a single partition, this index could be isolated to only the queue that needs it via a new policy. Postgres allows different indexes and unique constraints between tables within the same partitioning hierarchy, which could be used for this policy."),(0,n.kt)("p",null,"Furthermore, very large partitions could even have subpartitions, creating a tree-like structure for scalability purposes. This strategy has already been proven at scale in Postgres by the TimescaleDB team, and could potentially result in removing its storage capacity challenges entirely."),(0,n.kt)("p",null,"Yet another area of exploration is encapsulating all features into Postgres functions to make the logic of pg-boss more easily integrated with non-Node.js platforms, as most of the logic in pg-boss is actually already pure SQL. Some have also mentioned to me that it would be nice if we had a standard queue data schema that could be shared across platforms, which sounds like a noble goal, but challenging since it would involve collaboration across OSS projects to complete."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Apart from yours, is there an open source tool or project you\u2019re particularly excited about?"))),(0,n.kt)("p",null,"I\u2019m a big fan of ",(0,n.kt)("a",{parentName:"p",href:"https://supabase.com/"},"Supabase")," at the moment. I\u2019m currently evaluating their use of JWT claims and Postgres RLS for SaaS multi-tenancy. They have open sourced several of their projects as well, such as supavisor, a connection pooler. Their product also happens to use pg-boss internally, which means\u2026 \u201cthey use pg-boss btw\u201d \ud83d\ude42"))}d.isMDXComponent=!0},8838:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/pg-boss-banner-acb16e71e0ddb7af7590e1be6a252b1a.jpeg"}}]);