const schedule = require('node-schedule');

const task = schedule.scheduleJob('*/5 * * * * *', () => {
    console.log('executando tarefa', new Date().getSeconds());
});


setTimeout(() => {
    task.cancel();
    console.log('Tarefa cancelada');
}, 20000); 

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1,5)]
rule.hour = 20
rule.second = 30

const task2 = schedule.scheduleJob(rule,() =>{
    console.log('executando tarefa 2!',new Date().getSeconds())
})