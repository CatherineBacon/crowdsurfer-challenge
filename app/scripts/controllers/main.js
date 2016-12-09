'use strict';

/**
 * @ngdoc function
 * @name crowdsurferApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crowdsurferApp
 */

var testData = [
  {
    "currency": "GBP",
    "date": "2015-11-18T16:01:43.310",
    "description": "How Mining Works For most users of cryptocurrencies it is not necessary to understand how the mining process in itself works, but it is fundamentally important to understand that there is a mining process to create the virtual currency. Unlike currencies as we know them today where governments and banks can simply choose to print unlimited amounts (Not saying they do so, just a point), cryptocurrencies has to be mined by users using a mining program that solves sophisticated algorithms in order to release blocks of coins that can go into circulation. This is part that makes the cryptocurrencies unique, as there is nobody who can simply press a button and get unlimited coins. Everybody can compete equally while mining coins, by buying the same equipment as one another.  The different cryptocurrencies uses different types of algorithms in order for the blocks to be released, but in general it is not something that you should be using your computer to do as it takes specific equipment to mine and it will provide you with a huge electricity bill compared to the profits you will be able to make from it. It is also worth noting that the more coins that has been mined from a cryptocurrency, the more difficult it gets to release new blocks and thus get new coins. The algorithms has been made this way, to ensure that all the coins would not be mined instantly and leave room for the currency to stabilize and not be over populated from the beginning, thus not having any significant value for anyone besides the miners.",
    "description_summary": "How Mining Works For most users of cryptocurrencies it is not necessary to understand how the mining process in itself works, but it is fundamentally important to understand that there is a mining process to create the virtual currency. Unlike currencies a",
    "end_time": "2015-01-29T00:00:00",
    "funding_type": "R",
    "goal": 0.0,
    "raised": 29.19818,
    "rewards_list": [
      {
        "description": "An equivalent of $10 in DogeCoins to  6 people who donate $10 or over.",
        "max_available": 6,
        "pledge": 20.0,
        "title": "$20 worth of  DogeCoin"
      }
    ],
    "start_time": "2014-11-30T00:00:00",
    "subtitle": "cryptography, finance, crypto currency ,doge coin, lite coin, bit coin, economics, advancedcomputing",
    "title": "Cyber Currency Mining Company",
    "url": "https://www.indiegogo.com/projects/crypto-currency-miner"
  },
  {
    "currency": "GBP",
    "date": "2015-11-20T14:08:30.361",
    "description": "Support us with Bitcoin: $15 - Get a Mycelium t-shirt $40 - Get a Mycelium Entropy device $50 - Get a Mycelium Entropy device, and a t-shirt $2000 - Get a Customized Business Pack Mycelium Entropy is a small USB device with a single purpose: Making it easy to create Bitcoin paper wallets in a secure controlled environment. Paper wallets are created in 3 simple steps: Insert Mycelium Entropy into a printer that allows you to print pictures from a USB flash drive. Select the print option on the printer. There is no step 3. This way the paper wallet has never touched a computer or a network, and as soon as you eject the device the private key is wiped from memory. Mycelium Entropy is the easiest and most secure way of creating a paper wallet for offline cold storage. How does it work? When Mycelium Entropy is inserted into a USB socket, it powers up and generates a large random number based on hardware entropy. That number is turned into a Bitcoin private key and a Bitcoin address. The private key and the address are turned into QR codes and and stored in a JPG file, and the USB device presents itself as a USB flash drive. This allows a printer that can print photos off a USB flash drive to print the paper wallet directly off the device. Here is a paper wallet sample: http://i.imgur.com/L36LZgY.jpg The hardware based entropy is collected by using a chip with static RAM as the source of entropy, as described in the scientific paper: Power-up SRAM State as an Identifying Fingerprint and Source of True Random Numbers (Holcomb, D.E.; Burleson, W.P.; Fu, K.). Quote from the article: \" We demonstrate that a 512-bite SRAM fingerprint contains sufficient entropy to generate 128-bit true random numbers, and that the generated numbers pass the NIST tests for runs, approximate entropy, and block-frequency. \" Because Mycelium Entropy collects entropy from tens of thousands of SRAM cells, the result is impossible to guess. Every time you plug the device into a USB port, the power-up process makes the SRAM cells contain a completely random state, allowing the chip to create a different high entropy random number. This allows you to make as many safe and secure paper wallets as you wish. When paired with the Mycelium Bitcoin Wallet, with its ability to spend directly from cold storage paper wallets, storing and using Bitcoin securely becomes very easy for anyone. Here is a video showing Jan, one of our lead developers, demonstrating the prototype: Mycelium Entropy will be 100% open source, and uses off-the-shelf components. It is fully programmable and more features can be added over time. We will make it trivially easy to flash the device using either firmware you download from us, signed with our key, or with your own custom changes to our source code. This is your guarantee that the device does not contain any malware or back doors. Flashing is as easy as plugging it in, turning on flash mode, and copying files over to the drive. You will be able to download the sources, make any changes, build your own and flash the device. From the very start Mycelium Entropy will, in addition to supporting classic paper wallets, also support 2-of-3 split private keys using a technique called Shamir's Secret Sharing. This allows you to split a private key into 3 paper shares, where any two of the three shares are needed to get access to your bitcoins. That way, if one of your shares gets lost or stolen, you can still combine the remaining two shares to get access to your funds. This is far superior to any password encrypted private key scheme. Here is a sample: http://i.imgur.com/CGHWIcS.jpg Going forward we plan to add the option of generating master seeds for BIP32 HD wallets as a downloadable upgrade. Mycelium Entropy will be made in Europe and assembled in Austria (known for its strict privacy laws), and will be shipped in a hologram sealed box to prevent tampering while en-route. Reason for Raising Money Although the device hardware is open source, we need to raise money to be able to order them in sufficient enough quantities to make them cheaper for everyone. Mass production is much cheaper than ordering them one at a time. Also, about $1,500 of the money raised will go towards testing and compliance for these types of devices, like CE marks, FCC part 15 approvals, etc. While the devices are being developed, we will spend time testing printers and putting together a list of recommended printers to use with these, just to make sure that yours can handle this, or if it can't, to help you find the cheapest (and most secure) option you can get. Stretch goals If we raise $30,000, we will add Litecoin support as a downloadable feature. If we raise $40,000, we will add the second more popular blockchain-based cryptocurrency by market cap, which at present is PeerCoin If we raise$60,000, wow. such money. very rich. have dogecoin. If we somehow miraculously manage to raise $120,000, we will forgo all sleep for the next two month, and get HD out by the time we ship these. Risks and challenges The device designs are finished, and the prototypes are fully functional. We also have manufacturers lined up, ready to assemble the units for us. We just need the funding to start the initial run of production. The only problems we may run into are related to the manufacturers, such as unforeseen production delays, though we believe they will be unlikely. List of Printers Tested So Far Brother HL-4150CDN Color Laser - OK Brother MFC-J875DW Wireless All-In-One - resets printer when trying to print Brother MFC-8710DW All-in-One Laser - OK Brother MFC-9970CDW Color All-in-One Laser - OK Most Canon printers do not have USB ports. Canon i560 - does not work Canon imageCLASS MF8280CW Color Laser - OK Canon Selphy CP910 - comes out plain white on multiple sheets Canon PIXMA-MG6250 - OK Epson XP-610 - OK Epson XP-810 - OK Epson XP-850 - OK Epson WF-2540 - No way to print photos from USB Epson WF-3520 All-in-One - OK Epson WF-3540 All-in-One - OK Epson WP-4540 - No way to print photos from USB Epson WF-7510 Wide-format All-in-One - OK HP Envy 120 Wireless - OK HP LaserJet Pro 200 Color - OK HP LaserJet Pro MFP M476dw - OK HP Officejet 6700 Premium - OK HP Officejet Pro 8600 Plus - OK HP Officejet Pro 8610 - OK HP Officejet Pro 8630 - OK HP\u00a0Photosmart 7520 - OK",
    "description_summary": "Support us with Bitcoin: $15 - Get a Mycelium t-shirt $40 - Get a Mycelium Entropy device $50 - Get a Mycelium Entropy device, and a t-shirt $2000 - Get a Customized Business Pack Mycelium Entropy is a small USB device with a single purpose: Making it easy",
    "end_time": "2014-08-23T00:00:00",
    "funding_type": "R",
    "goal": 12067.74,
    "raised": 18868.514877,
    "rewards_list": [
      {
        "description": "<p>Receive a \"Customized Business Pack\" which includes a box of 40 Mycelium Entropy devices with a customized image and design of your choice, such as one that prints your business logo on the paper wallets (currently limited to greyscale).</p>",
        "num_backers": 3,
        "pledge": 2000.0,
        "title": "Customized Business Pack"
      },
      {
        "description": "<p>Show your support for what we're doing at Mycelium. Our developers have been hard at work to bring you the best voted Android wallet, Mycelium Entropy, and the Bitcoincard wallet (in the final stages of development), all without earning anything on them yet (besides LocalTrader, which charges only 0.2%). A small donation will at least get us some coffee to keep us going trough the night (and beer to keep us going through the weekend).</p>",
        "num_backers": 8,
        "pledge": 1.0,
        "title": "Show your support"
      },
      {
        "description": "<p>Get a Mycelium t-shirt</p>",
        "num_backers": 9,
        "pledge": 15.0,
        "title": "Mycelium T-Shirt"
      },
      {
        "description": "<p>Receive 1 Mycelium Entropy device</p>",
        "num_backers": 366,
        "pledge": 40.0,
        "title": "1 Mycelium Entropy Device"
      },
      {
        "description": "<p>Receive 1 Mycelium Entropy device and a Mycelium t-shirt</p>",
        "num_backers": 194,
        "pledge": 50.0,
        "title": "Entropy and T-Shirt"
      },
      {
        "description": "<p>Receive 1 Mycelium Entropy device, a Mycelium t-shirt, and one of our original, fully functional prototype devices. Own a piece of Mycelium development history!</p>",
        "max_available": 2,
        "num_backers": 2,
        "pledge": 160.0,
        "title": "Entropy Prototype"
      }
    ],
    "start_time": "2014-06-24T00:00:00",
    "subtitle": "Mycelium Entropy is a small USB device that uses hardware entropy to make Bitcoin paper wallets.",
    "title": "Mycelium Entropy",
    "url": "https://www.indiegogo.com/projects/mycelium-entropy"
  },
];

angular.module('crowdsurferApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.data = testData;
  });
