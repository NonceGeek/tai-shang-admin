import platform
from re import I
import sys
from pprint import pp, pprint

if platform.system() == "Windows":
    react_filename = ".\\packages\\react-app\\src\\App.jsx"
    hardhat_filename = ".\\packages\\hardhat\\hardhat.config.js"
else:
    react_filename = "./packages/react-app/src/App.jsx"
    hardhat_filename = "./packages/hardhat/hardhat.config.js"

network_list = [
    "localhost",
    "mainnet",
    "kovan",
    "rinkeby",
    "ropsten",
    "goerli",
    "xdai",
    "matic",
    "mumbai",
    "localArbitrum",
    "localArbitrumL1",
    "rinkebyArbitrum",
    "arbitrum",
    "localOptimismL1",
    "localOptimism",
    "kovanOptimism",
    "optimism"
]

def changeReactNetwork(network):
    with open(react_filename,'+r', encoding='utf-8') as f:
        t = f.read()
        for item in network_list:
            t = t.replace('const targetNetwork = NETWORKS.'+ item + ';', 'const targetNetwork = NETWORKS.{};'.format(network))
        f.seek(0, 0)
        f.write(t)
        f.truncate()
    print("切换React网络到: {}".format(network))
    
def changeHarhatNetwork(network):
    with open(hardhat_filename,'+r', encoding='utf-8') as f:
        t = f.read()
        for item in network_list:
            t = t.replace('const defaultNetwork = "'+ item +'";', 'const defaultNetwork = "{}";'.format(network))
            print('const defaultNetwork = "'+ item +'";')
        f.seek(0, 0)
        f.write(t)
        f.truncate()
    print("切换Harhat网络到: {}".format(network))

if __name__ == "__main__":
    input = sys.argv[1]
    if input in network_list:
        changeReactNetwork(input)
        changeHarhatNetwork(input)
    else:
        print("请输入正确的网络名。")
        print("请参考: ")
        pprint(networkStruct)
