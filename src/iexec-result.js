#!/usr/bin/env node

const cli = require('commander');
const fetchResults = require('./result');

cli
  .option('--chain, --network <name>', 'network name', 'ropsten')
  .option('--save', 'save the result to a file')
  .option('--dapp <dappAddress>', 'get work result from a specific provider smart contract address')
  .arguments('<txHash>')
  .action(txHash =>
    fetchResults(txHash, cli.network, cli.save, cli.dapp).catch(() => process.exit(1)))
  .parse(process.argv);

if (cli.args.length === 0) cli.help();
