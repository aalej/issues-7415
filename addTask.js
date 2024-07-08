const { Datastore } = require('@google-cloud/datastore');

process.env.DATASTORE_EMULATOR_HOST = "127.0.0.1:7079"

// Creates a client
const datastore = new Datastore({
    projectId: "demo-project",
});

async function addTask(description) {
    const taskKey = datastore.key('Task');
    const entity = {
        key: taskKey,
        data: [
            {
                name: 'created',
                value: new Date().toJSON(),
            },
            {
                name: 'description',
                value: description,
                excludeFromIndexes: true,
            },
            {
                name: 'done',
                value: false,
            },
        ],
    };

    try {
        await datastore.save(entity);
        console.log(`Task ${taskKey.id} created successfully.`);
    } catch (err) {
        console.error('ERROR:', err);
    }
}

addTask("Wash the dishes")