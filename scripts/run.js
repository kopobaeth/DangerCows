const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Void", "Pudge", "SF"],       // Names
      ["https://i.ibb.co/pXLpnSV/faceless-void-carry.png", // Images
      "https://i.ibb.co/1MQ7Zgb/pudge.jpg", 
      "https://i.ibb.co/FbZDT39/nevermore.png"],
      [100, 200, 50],                    // HP values
      [100, 50, 200],
      "Roshan", // Boss name
      "https://i.ibb.co/jkLK7WB/cdc2a46888c288d18a176cae19963b78.png", // Boss image
      10000, // Boss hp
      50 // Boss attack damage                       // Attack damage values
      );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

  

 console.log("Done!");
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
