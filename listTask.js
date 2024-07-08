const { Datastore } = require('@google-cloud/datastore');

process.env.DATASTORE_EMULATOR_HOST = "127.0.0.1:7079"

// Creates a client
const datastore = new Datastore({
    projectId: "demo-project",
});

async function listTasks() {
    const query = datastore.createQuery('Task').order('created');

    const [tasks] = await datastore.runQuery(query);
    console.log('Tasks:');
    tasks.forEach(task => {
        const taskKey = task[datastore.KEY];
        console.log(taskKey.id, task);
    });
}

listTasks()