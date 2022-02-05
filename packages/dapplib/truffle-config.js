require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remember honey hope knee olympic gentle'; 
let testAccounts = [
"0x19e9561c4266e6799233cf98b0da07797d4ec45193b2844266fb52391bdf1481",
"0x973fd6110ca870d5a83656ea60a1790781e516ae321f20eba6ed1b9a0bb24009",
"0x33848808989756a0f56cd13c742fc5395775681a54a82a571410ec9cb29ed26d",
"0x612034a6a81aec9e4b762d400d6e0d9171b88adbb824f36a0683631218c05c55",
"0x85bd3cde5375828017e213cdc7c5cb630622b5bc91eeca9d3a6fbb28835575c4",
"0xd9b133868552b3ee6db348f9318f84fa5dd432bfab5edf3d4f7a452ccd1660d5",
"0x46ee29340e75faea62819efea330c33885f3b89654ffd069b95cb4b29652b87f",
"0x2dc1e59ed3b8c3145034bbca2ad1dc1d608224e24c397ee15e17be86530ff4bb",
"0x922c1cbe1f611fe2baa82149ab89a9420070f5b7959373d64e1b3fca3d293013",
"0x77fa8924f9712c7833d05d2a091a6a3563f892571353614e06eb9f6d0a3a170d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

