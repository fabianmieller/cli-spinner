const Listr = require('listr');

const tasks = new Listr([
	{
		title: 'Task 1',
		skip: ctx => ctx.foo === 'bar',
		task: () => Promise.resolve('Foo')
	},
	{
		title: 'Can be skipped',
		skip: () => {
			if (Math.random() > 0.5) {
				return 'Reason for skipping';
			}
		},
		task: ctx => {
			ctx.unicorn = 'rainbow';
		}
	},
	{
		title: 'Task 3',
		task: ctx => Promise.resolve(`${ctx.foo} ${ctx.bar}`)
	}
]);

tasks.run({
	foo: 'bar'
}).then(ctx => {
	console.log(ctx);
	//=> {foo: 'bar', unicorn: 'rainbow'}
});