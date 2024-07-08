# Repro for issue 7415

## Versions

firebase-tools v13.13.0<br>
platform: macOS Sonoma 14.5<br>
node: v20.12.2<br>
Google Cloud SDK 483.0.0<br>
bq 2.1.6<br>
cloud-firestore-emulator 1.19.7<br>
core 2024.06.28<br>
gcloud-crc32c 1.0.0<br>
gsutil 5.30

## Steps to reproduce

1. Run `gcloud emulators firestore start --database-mode=datastore-mode --host-port="127.0.0.1:7079"`
2. Open a new terminal then run `node addTask.js`
   - Outputs:

```
Task 5629499534213120 created successfully.
```

3. Run `node listTask.js`
   - Outputs:

```
Tasks:
5629499534213120 {
  created: '2024-07-08T11:26:39.740Z',
  description: 'Wash the dishes',
  done: false,
  [Symbol(KEY)]: Key {
    namespace: undefined,
    id: '5629499534213120',
    kind: 'Task',
    path: [Getter]
  }
}
```

4. Run `curl -X POST "http://127.0.0.1:7079/reset"`
   - Outputs

```
Resetting...
```

5. Run `node listTask.js`
   - Outputs:

```
Tasks:
```
