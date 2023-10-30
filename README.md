##### Commands
``` npm install --save-dev hardhat ```
``` npx hardhat init ```
``` npm i @nomicfoundation/hardhat-toolbox ```
``` npx hardhat run scripts/deploy.js ```


##### 1st Deployment

```
Environment {
  config: {
    solidity: { compilers: [Array], overrides: {} },
    defaultNetwork: 'hardhat',
    paths: {
      root: 'C:\\Users\\zmeyr\\Desktop\\DONOTDELETE\\tutorial',
      configFile: 'C:\\Users\\zmeyr\\Desktop\\DONOTDELETE\\tutorial\\hardhat.config.js',
      sources: 'C:\\Users\\zmeyr\\Desktop\\DONOTDELETE\\tutorial\\contracts',
      cache: 'C:\\Users\\zmeyr\\Desktop\\DONOTDELETE\\tutorial\\cache',
      artifacts: 'C:\\Users\\zmeyr\\Desktop\\DONOTDELETE\\tutorial\\artifacts',
      tests: 'C:\\Users\\zmeyr\\Desktop\\DONOTDELETE\\tutorial\\test'
    },
    networks: { hardhat: [Object], localhost: [Object] },
    mocha: { timeout: 40000 }
  },
  hardhatArguments: {
    network: undefined,
    showStackTraces: false,
    version: false,
    help: false,
    emoji: false,
    config: undefined,
    verbose: false,
    maxMemory: undefined,
    tsconfig: undefined,
    flamegraph: undefined,
    typecheck: false
  },
  tasks: {
    check: SimpleTaskDefinition {
      isSubtask: false,
      paramDefinitions: {},
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'check',
      action: [AsyncFunction (anonymous)],
      _description: 'Check whatever you need'
    },
    'clean:global': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: {},
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'clean:global',
      action: [AsyncFunction (anonymous)]
    },
    clean: SimpleTaskDefinition {
      isSubtask: false,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'clean',
      action: [AsyncFunction (anonymous)],
      _description: 'Clears the cache and deletes all artifacts'
    },
    'compile:solidity:get-source-paths': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:get-source-paths',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:get-source-names': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:get-source-names',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:read-file': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:read-file',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:transform-import-name': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:transform-import-name',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:get-remappings': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: {},
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:get-remappings',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:get-dependency-graph': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:get-dependency-graph',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:get-compilation-job-for-file': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:get-compilation-job-for-file',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:get-compilation-jobs': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:get-compilation-jobs',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:filter-compilation-jobs': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:filter-compilation-jobs',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:merge-compilation-jobs': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:merge-compilation-jobs',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:log:nothing-to-compile': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:log:nothing-to-compile',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:compile-jobs': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:compile-jobs',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:get-compiler-input': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:get-compiler-input',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:log:download-compiler-start': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:log:download-compiler-start',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:log:download-compiler-end': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:log:download-compiler-end',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:solc:get-build': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:solc:get-build',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:solcjs:run': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:solcjs:run',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:solc:run': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:solc:run',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:solc:compile': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:solc:compile',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:compile': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: {},
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:compile',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:log:compilation-errors': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:log:compilation-errors',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:check-errors': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:check-errors',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:emit-artifacts': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:emit-artifacts',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:get-artifact-from-compilation-output': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:get-artifact-from-compilation-output',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:log:run-compiler-start': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:log:run-compiler-start',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:log:run-compiler-end': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:log:run-compiler-end',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:compile-job': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:compile-job',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:handle-compilation-jobs-failures': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:handle-compilation-jobs-failures',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:get-compilation-jobs-failure-reasons': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:get-compilation-jobs-failure-reasons',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity:log:compilation-result': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity:log:compilation-result',
      action: [AsyncFunction (anonymous)]
    },
    'compile:solidity': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:solidity',
      action: [AsyncFunction (anonymous)]
    },
    'compile:remove-obsolete-artifacts': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: {},
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:remove-obsolete-artifacts',
      action: [AsyncFunction (anonymous)]
    },
    'compile:get-compilation-tasks': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: {},
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile:get-compilation-tasks',
      action: [AsyncFunction (anonymous)]
    },
    compile: SimpleTaskDefinition {
      isSubtask: false,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'compile',
      action: [AsyncFunction (anonymous)],
      _description: 'Compiles the entire project, building all artifacts'
    },
    console: SimpleTaskDefinition {
      isSubtask: false,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'console',
      action: [AsyncFunction (anonymous)],
      _description: 'Opens a hardhat console'
    },
    'flatten:get-flattened-sources-and-metadata': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'flatten:get-flattened-sources-and-metadata',
      action: [AsyncFunction (anonymous)],
      _description: 'Returns all contracts and their dependencies flattened. Also return metadata about pragma directives and SPDX licenses'
    },
    'flatten:get-flattened-sources': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'flatten:get-flattened-sources',
      action: [AsyncFunction (anonymous)],
      _description: 'Returns all contracts and their dependencies flattened'
    },
    'flatten:get-dependency-graph': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'flatten:get-dependency-graph',
      action: [AsyncFunction (anonymous)]
    },
    flatten: SimpleTaskDefinition {
      isSubtask: false,
      paramDefinitions: {},
      positionalParamDefinitions: [Array],
      _positionalParamNames: [Set],
      _hasVariadicParam: true,
      _hasOptionalPositionalParam: true,
      _scope: undefined,
      _task: 'flatten',
      action: [AsyncFunction (anonymous)],
      _description: 'Flattens and prints contracts and their dependencies. If no file is passed, all the contracts in the project will be flattened.'  
    },
    help: SimpleTaskDefinition {
      isSubtask: false,
      paramDefinitions: {},
      positionalParamDefinitions: [Array],
      _positionalParamNames: [Set],
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: true,
      _scope: undefined,
      _task: 'help',
      action: [AsyncFunction (anonymous)],
      _description: 'Prints this message'
    },
    'node:get-provider': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'node:get-provider',
      action: [AsyncFunction (anonymous)]
    },
    'node:create-server': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'node:create-server',
      action: [AsyncFunction (anonymous)]
    },
    'node:server-created': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'node:server-created',
      action: [AsyncFunction (anonymous)]
    },
    'node:server-ready': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'node:server-ready',
      action: [AsyncFunction (anonymous)]
    },
    node: SimpleTaskDefinition {
      isSubtask: false,
      paramDefinitions: [Object],
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'node',
      action: [AsyncFunction (anonymous)],
      _description: 'Starts a JSON-RPC server on top of Hardhat Network'
    },
    run: SimpleTaskDefinition {
      isSubtask: false,
      paramDefinitions: [Object],
      positionalParamDefinitions: [Array],
      _positionalParamNames: [Set],
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'run',
      action: [AsyncFunction (anonymous)],
      _description: 'Runs a user-defined script after compiling the project'
    },
    'test:get-test-files': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: {},
      positionalParamDefinitions: [Array],
      _positionalParamNames: [Set],
      _hasVariadicParam: true,
      _hasOptionalPositionalParam: true,
      _scope: undefined,
      _task: 'test:get-test-files',
      action: [AsyncFunction (anonymous)]
    },
    'test:setup-test-environment': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: {},
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'test:setup-test-environment',
      action: [AsyncFunction (anonymous)]
    },
    'test:run-mocha-tests': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: [Object],
      positionalParamDefinitions: [Array],
      _positionalParamNames: [Set],
      _hasVariadicParam: true,
      _hasOptionalPositionalParam: true,
      _scope: undefined,
      _task: 'test:run-mocha-tests',
      action: [AsyncFunction (anonymous)]
    },
    'test:show-fork-recommendations': SimpleTaskDefinition {
      isSubtask: true,
      paramDefinitions: {},
      positionalParamDefinitions: [],
      _positionalParamNames: Set(0) {},
      _hasVariadicParam: false,
      _hasOptionalPositionalParam: false,
      _scope: undefined,
      _task: 'test:show-fork-recommendations',
      action: [AsyncFunction (anonymous)]
    },
    test: SimpleTaskDefinition {
      isSubtask: false,
      paramDefinitions: [Object],
      positionalParamDefinitions: [Array],
      _positionalParamNames: [Set],
      _hasVariadicParam: true,
      _hasOptionalPositionalParam: true,
      _scope: undefined,
      _task: 'test',
      action: [AsyncFunction (anonymous)],
      _description: 'Runs mocha tests'
    }
  },
  scopes: {},
  userConfig: { solidity: '0.8.19' },
  version: '2.18.3',
  run: [AsyncFunction (anonymous)],
  artifacts: Artifacts {
    _artifactsPath: 'C:\\Users\\zmeyr\\Desktop\\DONOTDELETE\\tutorial\\artifacts',
    _cache: {
      artifactNameToArtifactPathCache: Map(0) {},
      artifactFQNToBuildInfoPathCache: Map(0) {}
    },
    _validArtifacts: []
  },
  network: {
    name: 'hardhat',
    config: {
      hardfork: 'shanghai',
      blockGasLimit: 30000000,
      gasPrice: 'auto',
      chainId: 31337,
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      allowUnlimitedContractSize: false,
      mining: [Object],
      accounts: [Object],
      loggingEnabled: false,
      gasMultiplier: 1,
      minGasPrice: 0n,
      chains: [Map],
      gas: 30000000,
      initialDate: '2023-10-29T14:00:25.810Z'
    },
    provider: LazyInitializationProviderAdapter {
      _providerFactory: [AsyncFunction (anonymous)],
      _emitter: [EventEmitter]
    }
  },
  _environmentExtenders: []


```
##### 2nd deployment 

```
1698588558
30758400
1729346958

```
##### 3rd deployment 

```

Downloading compiler 0.8.19
Compiled 2 Solidity files successfully
Contract contains 1ETH & address: 0x5FbDB2315678afecb367f032d93F642f64180aa3 

```