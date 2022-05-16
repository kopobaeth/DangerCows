const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Void", "Pudge", "SF"],       // Names
      ["https://gateway.pinata.cloud/ipfs/QmTG7b1p3z4p9y6BAfkChyrPxQSpzvf3sSD84qvmC7x4JP", // Images
      "https://gateway.pinata.cloud/ipfs/QmVqLSwGfHPTWjpF5oX4yGzqhy6JuGet6ng5GYVn5yqxF9", 
      "https://gateway.pinata.cloud/ipfs/QmWpidUp7RZvGW4LXt45ZpLjDacJ19ZerF3jLewQgAbvbq"],
      [100, 200, 50],                    // HP values
      [100, 50, 200],            // Attack damage values
      "Roshan", // Boss name
      "https://gateway.pinata.cloud/ipfs/QmVkVkgksr1ZVyJLA7MnrzYbiAUhASiP6dNXXk8VZw5NrE", // Boss image
      10000, // Boss hp
      50 // Boss attack damage
     );  

    
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

 };


 const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();

