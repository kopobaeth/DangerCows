const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Zorro", "Charcoal", "Cookie", "Anubis", "Bodybag", "Camel", "Clovis", "Dalmatian", "Dasher", "Demi", "Abstract", "Ace", "Acorn", "Adobe", "Aesop", "Agatha", "Alex", "Alf", "Almighty", "Amak", "Amata", "Amber", "Amira", "Amrita", "Amy", "Andes", "Angus", "Annabelle", "Annie", "Antoine", "Antoinette", "Aoife", "Aqua", "Arco", "Aretha", "Argus", "Aries", "Armand", "Armor", "Arnie", "Arthur", "Ash", "Aspen", "Astro", "Atticus", "Audry", "Aura", "Austin", "Avenger", "Avery", "Axe", "Axel", "Azure", "Baby", "Bacardi", "Balsam", "Bandicoot", "Bane", "Banksy", "Barney", "Bas", "Basanti", "Baxter", "Bead", "Bean", "Beanie", "Beany", "Bear", "Beatrix", "Beaufort", "Beauti", "Beaux", "Beaver", "Bebop", "Becks", "Bee", "Bella", "Belle", "Benji", "Benny", "Bernoulli", "Bessie", "Beth", "Betsy", "Bingo", "Biscuit", "Blackberry", "Blanket", "Bling", "Blink", "Blossom", "Bob", "Bode", "Bodie", "Bogey", "Bolt", "Bomber", "Booboo", "Booger", "Boss", "Bossy", "Boulder", "Bounce", "Braddock", "Bree", "Bridgitte", "Bright", "Briosca", "Brock", "Bronson", "Bronze", "Brownie", "Bruiser", "Brunette", "Bruno", "Brute", "Brutus", "Bryce", "Bucktooth", "Bug", "Bugs", "Bugsy", "Bullet", "Bully", "Bumble", "Burberry", "Burly", "Buster", "Butler", "Butter", "Buttercup", "Button", "Buzz", "Cadbury", "Caleb", "Calvin", "Candie", "Candy", "Capone", "Carl", "Carlito", "Carlos", "Carter", "Casper", "Cass", "Cedar", "Ceiba", "Chahta", "Chalky", "Chaos", "Charger", "Charlie", "Charlotte", "Charm", "Checkers", "Cheddar", "Chena", "Cherry", "Chess", "Chestnut", "Chetan", "Chewy", "Chicago", "Chico", "Chili", "Chilly", "Chips", "Chleo", "Chocolate", "Chong", "Chopper", "Christopher", "Chrome", "Chub", "Chubbers", "Chunk", "Cidlee", "Cinderella", "Cinders", "Cinnamon", "Circuit", "Citrus", "Clara", "Clarabelle", "Claude", "Clemantine", "Clementine", "Cleopatra", "Clifford", "Clooney", "Cloud", "Clover", "Cluster", "Coby", "Coco", "Cocoa", "Coffee", "Colton", "Comet", "Comic", "Congo", "Conker", "Cookie", "Cool", "Cooper", "Coral", "Coraline", "Corby", "Cork", "Corporal", "Cosmo", "Cotton", "Cowabunga", "Cowlick", "Coy", "Cracker", "Cream", "Croissant", "Crumb", "Cupcake", "Cyclops", "Cylus", "Dahlia", "Dairy", "Dairymilk", "Daisy", "Dakota", "Dales"],       // Names
    ["QmZXLpuzA6cNoPBCUzNVFCTKAjEN4JWqy5rKTt8qKRrGPA", // Images
    "QmPBi7FC8U5vtxdTwyF4mR6QVjVe1qQcQ6gKwYqLGJsVD5", 
    "QmZKGcCBqyNRynQwGQMcC6VPq8xhioHUffyHtJZabRkYsE",
    "QmcVcEm4G6bPeLtPCfZHQLLTS7FYwvvWZMY3pK6izLpbFd",
    "QmY2bKHN65GFFRg8HTmW3G7UYhCYvGw5FspduGK62yafnt",
    "QmQ6Q9Fo9K1nEzNCVgDWGZjytbF3ktyeu6YNPoEhAhAs6H",
    "QmTruHBp5TNmXLH3wcxyjKtFmH29Srq27GcUgzd3X6VYbJ",
    "QmU2KdwcXVrDvTwt524Pii75ZDkRD9opEDfkcrLZiSzqRP",
    "QmQu2FWQyPp8KZBiYc2M1z29P5qgd9JVKaJ1GzjMfXE3Gd",
    "Qmaq46Hbxpgs6AioyJHZ5rJxNyxRsXn76LEKf3LyAeU4dA",
    "QmS1P2avofHtEnYVkTjYpsQiGG5NgfM7QSyDEJGFAL7ek2",
    "Qme9GeYtt8KzMybMxJJpC7u7ZTbimBjZoiYSY7Xuf3vk8f",
    "QmYFndsYryQ6XeBG4FgVgs2EieF9VwPxLXbAyArzz9QbjS",
    "QmPTKYnsX8BQB5CKLd7jbZfdpo8UTx3LgnPJvZuxmGFKGk",
    "QmRos2NLLg63Zbd6jQQw55oCHX83sZnRMbMF2ZWShR5jF1",
    "QmRuNC6hGzxLY8XvhMpND2KxPTCk4pMDXCGLQG1k7rWbJA",
    "QmaXaZtifsMDfdJQZxrDiWnuM4UUXGdRgC5uc5qrcoyQ3F",
    "QmdwhLk3MzGpLboZKrs3FAs9oBQLHY2ffXaYeSJjbUozUY",
    "QmYy7zuXYYJ1s8ijBUVCLFY13oWqHrpVQdp7Z6P7FZkNR9",
    "QmSg6rMbgHtZ8vytADoHjw8dtkae3Q1eP5FvjvE5jBQegZ",
    "QmYGcUpUtmuUih2J2pvjziJzCHswXqafSBcUWSQfcrq238",
    "QmUeKiFNQh6oU1BmexbTkpTtta7e8TY5T5z7wmgZbRfSo8",
    "QmRbb3JkCxbTHm6uBewAXKLHf7ANEkqcQsB1bXESrjpN4g",
    "Qme8jZSDYmyhUji3KjR7RcqauLP16SC54Qb9kWrEEXAaka",
    "QmVkdXwcec1adnZncg452z1S9jAVYjzozvEhdjPRYCsToi",
    "QmbLZ1pfNUHcP34A3tDHDyYW65PCcMhqrUkkwCbmtxngzn",
    "Qmbxf4vkemqgAdC2isBAg7sDHWvwS3FvZXhXCQtgfL3Fx9",
    "QmdWBk4edDw2Ms7bSkWnYQC1FFhyLarugRTo4WCgeMxmqH",
    "QmapFC83KruzYY6Ets2y2h9i7XQEdGWMFAw89ZsdHdYEYD",
    "QmRkwqLpRBsALWHtpNe6vRd4ojZCNroFLr7HNySVdt4eYJ",
    "QmbdTG8Yd3ayaywcwFgZEfHhssqysyhmUsPt3XDbNvgJy5",
    "QmQUdCP8Bo48SSGdizM3cnMTPE2iT7DwGLFBWs2ZXMZqxx",
    "QmV8exfnh1UGiJJfLYaWU5dt12ZRXJWYF5XqeC42ZKiHN4",
    "QmeBydKc5tiTHJRNVJxATwiyjrmc9PKQhwFrPTyiA2EMFq",
    "QmQSCN9CKDyr6sirNovNCDVc9bELjdD9WXk9ux73D7MbAT",
    "QmUEjChDDRj7MeBwkjmzYbivwnhAGq4jo1jhnfA6n5d1g3",
    "QmcExbThAKPdJ7TBXpMxu4MKxvWoXBPW73Px15xdMqynv4",
    "QmcTptsGF5N7V3xfNUXZsPUbA4gpZJpiWNVCsGHau8JB1k",
    "QmTtoYjQp2JG9aSLyM1n99r41Zfv3pUhPDsxxzHJq2r5Ch",
    "QmPaXT2gXdi4UycbiHWA2adrgTuK5yS4mYuqdjP2DicSi7",
    "QmSxHL3CSK32mdChRj3yUYDkUHfHUBg3RKpnuvubTXQLsP",
    "QmdAiQU1ydn9zMK1sJB65fXucjBDhtNU4NGVG9QKgW8kqu",
    "QmU6y6dJEmTZTTgSGNjE1YsBomjCUNMavKDpiB5eHRq3NR",
    "Qme3VDhec5R4MamcuxBJubVjPfLfbCTpB1HTiFbxmTJoEp",
    "QmeUHgdoFzPPnBgggZ5pXQ4Vjtu6RdVSdGafeDPsRZuzLh",
    "QmSqH6S7UVJSP3GHGpvHocsoZ7d3UyoirNZUtbhNZPhWXe",
    "QmRMPZxuLcjKJe674Z31Zfz8GrPd9WHaHuDawED8fmsK4r",
    "QmfRFmALX9LgiAxpvTbDqYnaUNHqKjT98c16C73Vz8KH7P",
    "QmazYeikfCX4HbDAdTehm23RdLmkeqsfggC6jAurtDZgkm",
    "QmaptbR2L9HcrqxAUaBgd7cmtTSYUXN1kLwTX4pbRWSnE4",
    "QmeFaafcJeZjakntgndR7yW6RFkbKsdKyzScxd1LCuYzyh",
    "QmfXPvSskUncFThZ9BooDzJNAT3QU7rJFcxWkS9XEY4CKB",
    "QmT18MynSQLmkgL9HzsEHkztfuhYXU6xSopugRweE4qcqu",
    "QmRjmVMvaaLgoEjC9rnBRZ84RQbV5cVJBBkhgGTYbqZuhW",
    "QmQ7WLu9f1PF8iu9r4dQDfDWBdZZpVwb1HZi1HirvZjmzY",
    "Qme2dvpgnVr4HTPD82EXrJsJaM4gPKNCCJ8fFLqFKguyov",
    "QmW8fwmTbDsUFGLBb2aUzFJSbFM33moTMDynAeVqcjM65P",
    "QmUQmC2MumQEBTfRV4FRTNZNf1guCPFKZfeL7qKTT3m1fY",
    "QmavRVy5jhQUBfxQfoGvU4eDxtZvW2bjBHZpgnxFJZa5E4",
    "QmU7UhSEAotmBmRVJzFAcg2AfXsCB7VDdYDZgvji7p6wZr",
    "QmYzwH7TVGXF4hNdqw177fT33PQy4aYkhgdvhQvmGMuooA",
    "QmfZnwVuAp5ren4u7PohEEBpadjnYmH3QXwVjneYXmvEB2",
    "QmeRPbnap9RVydQfhAZPkkAaBu1jQCBZ2gWerDEE3Q6xiJ",
    "QmYoFvsEGEXVrK4osujJiDk7TsR6zJCTuf47CoT9JJuT9v",
    "QmTrBZmaPkJwQyQd2deXqQVH5cmPWuMYrc7X74AnugZ1cp",
    "QmcfvMHNLmo9tGJhVdoBBsy6wZBBCXG1RfGN4RyNuoxrhT",
    "QmXXjvqehWRiMwsLRWf32tiMWBFcQVZZ6JH6DjMzctcwo9",
    "QmZxiTXAjXbSFKzeHk5W8TUKouKKSZkrVLyUGpGE53Emhg",
    "QmYG5t53CFbV7ffUSSZVYotVH2Qf2J1r453MfJU1iDGRUc",
    "QmbJ79gmbGZxCd5mZ5QiNnzKi9XkvQEf6ji6cfoHKmQCEz",
    "QmXMtWL26mAMBe9cuMhWtHuPeDqvrAdFKevtvPzRFikgJb",
    "QmbKshjGkBNdmaaUUGukmvgs6WmeWZSDhHxCcqmJZHLPxX",
    "QmdENsbBEef8hRCbMX3Zy42jjAHt5fY9mme7Dyo2ZEQTb6",
    "QmedfzhPaGB3Y781sUBXD2XVZTZPiP2yeKwg4MZpchHSRC",
    "QmedqqBzH6EFevB5WUgNw4YX3HFQMQt7c8rDe44LcvpK2w",
    "QmQ46nQ79dTZYSC7Bu1Q2iFMWrRQ3qdWTfoNJusiR9gS4z",
    "Qmapwxpzvo5KqH8fUHDiDWNLopvHfjm6EVoBx5pZsphiac",
    "QmSa1ctx8h1jh1eDLZUj5Go6PjkoWpovrqTFeXASfoQSLH",
    "QmUFsCeZDspZRuDjXxCd6qw5x5Nz6yo2jTeU1DERKTavEz",
    "QmTAmoujbUBDKQhtKKUYtDVGuSecn3XuqGeh2GYMzDEwwk",
    "QmRLWitvaHJoMVoJ497qkTaHaaq84HKhc4bPwmuAF1CCSP",
    "Qmc8adaATajyBsQVCJN57AQJBVqaCeMFC7uinELuk4hvK1",
    "QmZtZu8becYpfe8NEstfDASjMvSJuvfGzmu6gfgiHjrVC8",
    "QmexLxzmwoSGjTaGhT15N9vhUgkVZgzEcNgm7ETEZuAhSo",
    "QmTqJEPV8xTpH1VRTVhYYP7rvpaqKj9KTzsMxqFmLJbLy2",
    "QmUspmiMPDuEqTucGkFQU9aZ31TTBndikbddTcSd2nAV9U",
    "QmRFxchXcsxhBhuA4K2LythuyctfEZNmQdQJxGMt2rpboz",
    "QmTQGqkA8gsbnR9wnuQ3ED7bxADM6XMEvGFMgifZdHNd8e",
    "QmXpv6wb7vvG5p8JgDRsMiKpKmbS4yxgZH26xZhnQ1HK7J",
    "QmcGzPYiTmVGM2Xj2hTp9nr2YjuHtuVg5oRd3Y9TWjgk8V",
    "QmfXGNCkTtJKVx19h9EXW5BxMgE9JxxP42JY15m4GM7RZd",
    "QmYFap8qEWMgKPFCYAnPJefx8jzPaMygveFDJdG4QkJESj",
    "QmY5Ey6qVyW79HSoUKM1HrJCyLWwgsmRXnmiBhMyGz4Li9",
    "QmUTRf12bjHStnR6e54AWULPrSLRKpzmyAmXVjRCZr7iFU",
    "QmTAV4V8EPrkPnBkwZ73AaGdDjgZSL8gAToWuLCpNPFRfd",
    "QmTJzgESNP7w2EsGignQj4YmkqMApDWPNAxn12Qedxk1YR",
    "QmdG4JXJWHEbdsVfEg33NznNxZm5DK7BV7eFFG1QW9P5Lw",
    "QmSzmp7JncN3KFRWCFcchkLbnZbJJedcgrFe8BNWPdpLtA",
    "QmSyGt2Dm1m5VJeKJo21jFEcndKDLrunfnzGhJ2GxiMsWH",
    "QmT9h1usoXkdAbfbLcR8xFgQjov6DVkk8dfxbw27cQhDfK",
    "QmUerLAob6Tf66LaiiefXudVEiegTdPe4JEstF1YhW3fsD",
    "QmRT7PpuisWRbQ9RJkALcY9pfMBTfXg41dtLdckh4YLvqL",
    "QmXVaC5KDxLTBgHDJKEfi1jUqcABDPNsiVt6Lez9AMMUJg",
    "QmSo9vBDkH1N4Vz9XdBjaBuxbNjLjVWPToPxtvWcDQVvGV",
    "QmW43dXqq5qudzL6yk2FnrEoZxc395fMvP4MRbn39983PN",
    "QmYmrUztTxfCscTfBuqtMNvAp7zkm8Ad92fqmFnJMtHRTg",
    "QmPRW7ygWhTvVxtobHFkCMSBRciGTU6Rxe9TRN2fybHC85",
    "QmdmRuagXjhD7vvU3FYDbsobZj9PXT61nxQVye59zYQ6tS",
    "QmcoX3abWiZhJRoay7JGPhPtScBNQq1o6z7vDNCvnfB4dx",
    "QmQsKqJNgSyoM3ZVDhQ9gAKNT3rEfn3eDgYQgAEoCdixM8",
    "Qmekve6dEXQBfw6PVRFKkoNnxguEDdqHkeqFNssfvj2iFb",
    "QmZ1h46DTkw26xxAPbJHwqjsYZLG6JK1sL2W886kYWv1At",
    "QmUJbdcuCd8YXxjHmcenoo9K8LETkNVuFPcsSe4Fmgj9TP",
    "Qmdhf6sLC39r28G8btLtna1bJKyZXHsRtvZnSdVDCyJXvD",
    "QmYtquxFSS29wNJdE3QMtK8sM8rK1xaQnJ1DjCDvSv7rfb",
    "QmeyMtsEhAnbw7z9Hdu6DfEWCS6JfkAhkhUCw9SnCwZtHT",
    "QmeUjPYjoCi7V2sfnEMFpqrF7mMeDWjUyS6wDoRX28K7jQ",
    "QmYCa13e9UATbTdLwWPwjEGYjQdGkVE6TX5wQEbCTw3PcU",
    "QmWD5q8EScNH3hUyNVGMFYfkRQmCsSyqLrRawDiJActfVu",
    "QmeNbaFAAeCvfFoqSrFQuUw5sRj5ptSBNRAeH3jHfFCA14",
    "QmUpTA4rAsqHmKmRrUG5gVe6ns1uzegePpQo4hPBEAKwxQ",
    "QmP2RqqYDoXqVBM26iyssBzJ1JabxVHpyyMggYuBn5s6bj",
    "QmRw5EXwFCoxsJocmzo4euEXXh8We14a9tXuTHzzzTkvaZ",
    "QmbtDLp1a2HfZie5Xyo8SNUoKDd9hBc1JR81Y4b4idzy3f",
    "QmbaGawUY5h7tC2FPY9w3SnGuhBsGKp1CESkTokNgRMZq6",
    "QmcZjxJM93QqndPNqjV7awg1umfvKzJ4vjYAi2AoMM4N3F",
    "QmWCd4omF1RHw6q2S6jzReYE4UcLVYroi4WcroreVdYgNP",
    "QmXqKXJ8T6HpXAutCJZB9W5y9vsQqkr5jrANuvudpuUyaq",
    "QmUHCJwhyLKJvvQASuhTyCd2BXVPdqAnyCgHM7g9EdjoZb",
    "Qmc5yPhuJ2vXYSwV94zwJShsscUsXK6Tha6xbx79fVTZg8",
    "QmboLoioPe9ooBhPVejZQj1eNYu4SWdQB41dL3oMhWKcdR",
    "QmTkwQyeymW2fbD8VdnvVp1zjXHRoCPar9jmjbeP6DGM2v",
    "QmSbc3qbppMgXNuWe8rejxDg1CSVBZFTkCqkAQM3uahznZ",
    "Qmd2vLcieGM7Uh9uuKxkRZ1zu8D9zHKKgBXThaQeTh7DNm",
    "QmUzruoHwRjsqV1RQWCEtSsTGNS7ef8GVRRW2Gz3wMpdzv",
    "QmWQV2gLVPxLsfvckNWerwqv1gecC1mXkwEy8aWPY2ijwM",
    "QmZ5W4GLBmDeudVtgRvdxvuLDs7Ehjn7h1Xn7W8U2mWbz6",
    "QmZQs6mvQ4BUXZmMngT2vvbFEt699rbzxvXCQyjT8M5eYB",
    "QmWqchn3f6LNipgnUvUrtadHSFZHJSEG8aSUpUofLvKs2g",
    "QmceWEgggkPKR9GMpiwSkXubbsgck8DHBkEiKPBLMGVu1E",
    "QmY7Dc7nwSWFq9guK2ZWhhm8NP6ciQ4krJ95esRbDQR59c",
    "QmdaVaTTEcQghGuBF3Nndpymi754NCmuANXFg34ZAVMP7p",
    "QmYhfR5fuB6Vtuu7kTdX9snPAgPZU4AER9VUrUf9pNUUSS",
    "QmQWFMeVC49gW7G3Tqfyg9ta5sncEEJogmNydW9jZv6p7n",
    "QmaJ5KsZ68z4zJ7uNF2kYs6WJY5yaY8FsxB3LpM8qKmjsm",
    "QmXKZZEd3MSH3eokGDfpLBWvaDrwQkU3fmghqdLMqUfHwF",
    "QmVkWeNAYhDtKjRXRJ8Sjwc7qULZvuADocvbPevyGPzoEx",
    "QmNcY6ESTUevdwCHT1xy34JycdN37HPfdz8wEMne6wcUYE",
    "QmSgpQ3KizYZwzX7YZuhZwKiygrBdT4ao5sSCYfvf2syAK",
    "QmSAg5pcnZTBYSHTJqmjvuJtwUWSCKHGgji9kEnvQPQaZF",
    "Qmd2hJbzeF8GR94YsaFHacZxaXLVSWasJWFEijqJGKZP4D",
    "Qmf9dBWMqE8ucWWiNVrAeHAarjv1pUSKNngczSVE7KrYD8",
    "QmcqPwyfzsEcsdzVmRnLXbtG2dhcdVkA2vxt63aT2S5Vq3",
    "QmPEoxeUZeEdwb2DQxhVBoCMaNLJqc2AVEqJZH5se6ZjEM",
    "QmSUxqkKSxRJYLXjjJ5DWnTN6PwkeUW5fa1ob1R5bMQPDZ",
    "QmdF39L6hUN6zrJnFM2hAqqzJvGBJdqhpXyn26dwE1ei4G",
    "QmerUfuo6GpFeNLV7LoeiH3RMkB3SgqVkiQ7wD7X4RztPG",
    "QmTeEsJssZYsSxGU29U3CRfkQbi4wT7cfvrjnPWimMuJU3",
    "QmP5FCsFhQJoH8LYMFx7xymXBWdyCZDoyP1FjbY1h5KrEi",
    "QmXp8efKp3RqMCSdwYk6QRomU4neDiGMEbQYnCjgJnpAaW",
    "QmNRYWgFjr4HYQJCJmL7bPZbR9XRNk35GYxGur1UmGx1e5",
    "QmWoZPcLaKRcPMwd56mzLBTxPLzXeioJJa8qBrTEGjG1cD",
    "QmdiyqGAH6TXKE8ZV1GkTrEqxeBBrjj2gdyVWEvw6AAfe8",
    "QmTQ7YqLQ4QMDVApysRB74EYSrSuYBzWhH1DUo6cdzu345",
    "QmfDv9ciaSKpwGUCuz8Rr66kNX9TyEqSMjyvWybiGVcdar",
    "Qmbsbez1zu53p7bzHhzDyHh2CUez3H56tjCLV9ZUajkEKp",
    "QmZ2A9rNjA2UWPTiY6fPtCkpYbXZML24eNqCa2igmRzgxs",
    "QmdkEmaiVBKQ9m3eC54jJYsSursEpjt9KhWEQttqoLbuE7",
    "QmbLes8F2arx1NCdgJnfSTxyABBDvLtS8hoUyJGu9RgvA5",
    "QmUDPTm83gTdUdYMDKwg8X6yKuUcZFfrgM1nuvyDcYqXMR",
    "QmQVJX98nfrSnZu1MjLeDBUSrcLXMq7f7DBViv7PnLXYyd",
    "QmRH49XdB1L7cJoCvMBFCnMGuA6aNTqSfKtfNkX9GuXXZ3",
    "QmdQ1qiYhoDUZE8NxC2oZNHu6F2oMzdKks2Zw85tnuRQcd",
    "QmQXKss5kiNkf2L2AHoPRXFRgzh54yX6hes8CCcxXz6xJu",
    "QmdCb8tHzfF3Wydjp4TKs6eQuo5ZpgtrDmbGTtH5ULZRhT",
    "QmW4U5d118hdZF9DhMmPu8unMkLvLHHkLbGjz82TFDJa6z",
    "QmVaQxEiKSQFdhayti4RWZtZiXLHpBePUUDJcecRQhZhYn",
    "QmWpT8GGsFRBjNnuVNsTgiPw3SSrmDaocV5U37KkAuEMna",
    "QmejDZmbkoeNSJCmKZjMDT6udTbDeoZso2Ag3Erz8w7bgs",
    "QmTV53HbwvWuA7fZVPBiju3MRKfRxaRAwW5Z6WebqwG4YK",
    "QmYyQ8ZJVpbkk1pzTW1tHW1mcGN9ivZfC8XWpJBCWrD6uy",
    "QmVYWDLzjYUMstR32bbfVMab7yiqYkBZyiYyuo6u7ztaW1",
    "QmbCHmywm76FGXPwdABFvrvw2DvPe8MmnjiC9pJqW91j2r",
    "QmdnksL6eiYtcmhNiZeKg2jTj19m8RDjEVuyXEJUbq6DPb",
    "QmW32FBcCRA1CZjWSMksEHGV9Dy7BwGRvGuZCTPujomymt",
    "Qma5DK7bYikrP89pvAYU6J7m7uXyznYzUiM629PhnHDCFB",
    "QmeKr2ccw1PoS3g6CmsxFDc3eZetbYuyPJQxLfFXB5WTNC",
    "QmWBWqVGXQYtw3UQMUQmgCeBhbU5PCXpr5cXHytfg9tr4R",
    "QmbRQSzvVbbmfPkHzUoU6atmKW1YABMWNieczTCo9b2x3r",
    "QmaGueL6avMuCm7KdXJrNAKBhwdTiG8b5a5vBtif5xCuxm",
    "QmWprzXbw5eqKh4x9FHmUgSswFdK8r1bczbLDvRo7uDcgQ",
    "QmdyHLGUnPQzUnPBgnkYyEQ76JhCesB8Z1gSpMJpBpbXKb",
    "QmfBADmyt8rNWb8y12DBN4rpSUXdvzvWBpR91e1dr4kbY5",
    "QmeHgB2CvJCJb9H1xn6JetiWWdTto2t6fPpiMGuMAjgxtk",
    "QmTMEdsEXcns9E5L5RAMuTBzDv9iNpqg7YMdXTf8yzCPC3",
    "QmYWidrReLAeMBxeAAWXaKJtt1mmZc1v1CgwfYBYNDdgxP",
    "QmaBBuKuMqcGXnyMvPkKFhJmHSzxtcwkizfptn8xZDW5uC",
    "QmRtV2NWDYPZtc9kQwmP6SmDxT6T8LURtr54iHhTbXJyHp",
    "QmYJCb1yPTV5dVdHSaAi6pjD2Se1QDMULDCogGTV62RNhu",
    "QmSchiQHuPGm5oXmL3DKpqBd2RCfAXLxANEjx2tJNwHF2L",
    "Qma3WiuThZJbSkM7D3NpA3ZWkHBk8bV2xcMxNXBC9wSgiy",
    "QmbFZDdMbFtEiCd4LbVt5jLoEA78SWL8Tjb7RjsHxJHMk1",
    "QmeB3wz9TRWyXoLGJk1Qk6vqWtZqCtJo46pc71nFLMTRoi",
    "QmNxF4YWBXurb4WfqEijdAZ7ptGPJC6UjKmCJC6TawwvHH",
    "QmeZgoL4VPV7LwCzX5tPVv46CcHHz119fhv4aWNqMYnU2c",
    "QmSyyYGLWPLiUkqas6sDAv1H8VYKmkz8rzoSaiZGJVT7yv",
    "QmWGZcRYwBysX9tLsB3dbR5nUteN2Pu2ZL4xWZxbbMY2EX",
    "QmQUps7rsiKH6Wvim46eCLm9uW8CdcvYXVEUVZTfNakBW9",
    "QmXXKxVVG2N3dfozSdraXTFzPcgHN5pYzaYkbY2nUSKGbh",
    "QmeaRFzUfzB6t5bF73tZ9qc8udFRRMde3hVBGUvte1TcPe",
    "QmPtHUKnHhGZTLGpFkmzdRsux4uyU5wHPepr1amAppTQcW",
    "QmZSDLX58rfgvfRGT7RFGatiNZiGYfkcWHDfSPHrs3Gt7c",
    "QmYWidrReLAeMBxeAAWXaKJtt1mmZc1v1CgwfYBYNDdgxP",
    "Qmd14Tay1SoFxK5ZDrkMczsHL4vx2hqnZBX7idyMptF4Zz",
    "QmWuDmPfyQZDy7NCsdZZM1FKv7gu6STXBJBx9PGCny7wb8",
    "QmY8Vzpz85fD9oYXiu2w8EoT8m388NvKGHcQqmX9doH6DA",
    "QmQLFZ2dDw4PHrfSWhX9CT2S9gJdvcSVxoTQzzduScJ4NK",
    "QmWunCiQLXEYMijdzaz1iGEGpZQNpcPgUEnnkj95UUXASn",
    "QmcZnMT2ibm861TzEthgazXvKKPYmGDmF8KShHwmCNUXpC",
    "QmcYbaCh9Get9J94AARy29bKYrLHh2UjdiYTyK8TEdXUj9",
    "QmW9YwF7fPWGP3CSjWe1FzQ9u8ekdvC42f1PeutCjbFe5B",
    "QmP9CwgXwGEsZUNvTbEsm2TLppoZg7nC7nUYFTPoy5JiFF",
    "Qma2M3x3F15iH1FLQcS7LFLVeXQs7DS49YKsZroT66S6Ac",
    "QmP27EZy9VPpij7K4dd4Y5xdsaGBThJskAawgEreiEfoJA",
    "Qmd1AFkosrAZV2sFnRLq1DwxYJEmBFWMFmotcifA7FtDBo",
    "QmeiP5g27GMnU5q3vHwn39V6jKSMTPeGiCX2uXGZw4ueLR",
    "QmVPLGLYmTKkrDfKtygTnU99FDkKgcBTibKwi6LtSfLreh",
    "QmbfeA6oMqMxJin64JAt11xvTCJaPKkUYRd4HLNmhpXirr"],
    [100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100],                    // HP values
    [100, 50, 200, 100, 50, 200, 50, 100, 50, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 50, 100, 200, 50, 100, 100, 100, 50, 200, 100, 50, 200, 50, 100, 50, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 50, 100, 200, 50, 100, 100, 100, 50, 200, 100, 50, 200, 50, 100, 50, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100, 200, 50, 100, 100, 100, 200, 50, 100, 50, 100],            // Attack damage values
    "Roshan", // Boss name
    "QmNqtHJnBfi6k53Yzgv9S3Fr2Tk3yZbKLtvGEosAGsDyCr", // Boss image
    100000, // Boss hp
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

