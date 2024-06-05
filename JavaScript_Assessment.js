/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, type, color, horn, likes) {
    const NFT = {
        "name" : name,
        "type" : type,
        "color" : color,
        "horn" : horn,
        "likes" : likes
    }
    NFTs.push(NFT);
    console.log(name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    // var len = NFTs.length;
    for(var i = 0; i < NFTs.length; i++){
        console.log("----------------------------")
        console.log("\nName   : " + NFTs[i].name);        
        console.log("Type   : " + NFTs[i].type);
        console.log("Color  : " + NFTs[i].color);
        console.log("Horn   : " + NFTs[i].horn);
        console.log("Like   : " + NFTs[i].likes);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n \nThere are " + NFTs.length + " types of Animals")
}

// call your functions below this line
mintNFT("Monkey", "Animal", "Black", "No", "Banana");
mintNFT("Dog", "Animal", "Golden", "No", "Bones");
mintNFT("Cat", "Animal", "White", "No", "Fish");
mintNFT("Horse", "Animal", "Black", "Yes", "Straw");
mintNFT("Cow", "Animal", "Grey", "Yes", "Green Grass");

listNFTs();
getTotalSupply();
