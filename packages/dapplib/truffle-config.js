require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot blanket radar situate common hockey kangaroo army genius'; 
let testAccounts = [
"0xf1dca6962da0107eaf00f383dee13cb1ad9bd8381877d634b50e4e9721addeef",
"0xf22441de2f61237e291886b04a977a85c4e44548408f9e465773aa4faacfdd0b",
"0x21c20dae0e7c7afc48c10d41bff2124abebfeb8f851144e0bcfa31bfba07f2f7",
"0x1c8043d5f2669e61a0cc1bb7dda7a910e04e5deb3e61201f23bfd9ae4ec4da4d",
"0xf712a995875d5db4acca38cf69fe0f98bdb1ce9d7f3a454ddbd0654ee24cdf21",
"0x5574da7d7d21abed3150f45fc4359ed4e766668545632c2969731f9683ce3cbc",
"0x25dbc28cc3094e292aee4578350e3aa17242b28f9577777700082b4a4b5738d3",
"0x573a7e71f07ae3a89bc1e05290d9f4c78230eddf1cc1080cb81f96e293aaa2b2",
"0x5ad0d80bff5398e311ef50b470fe28e8e6c33dab004b7f2bddeee44018fa2ff6",
"0xe30890014031f26b2c86c7f511145bcfca6553d606341a3e23d47bc7fc59d973"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

