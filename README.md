# 2r1 Coin

2r1 Coin is a blockchain-based cryptocurrency simulation that demonstrates the basic functionalities of a decentralized digital currency. This project incorporates key blockchain concepts such as mining, transactions, and peer-to-peer (P2P) networking, with an added implementation of the Freigeld (demurrage) system to encourage spending and reduce hoarding.

## Features

- **Blockchain Core:** A simple yet functional blockchain implementation that supports basic transactions and block creation.
- **Demurrage System:** Implements the Freigeld concept where money decreases in value over time to promote liquidity.
- **P2P Network:** A basic simulation of peer-to-peer networking to show how nodes interact in a blockchain network.
- **Wallet Simulation:** Allows users to send and receive 2r1 coins and view their balance.
- **Mining Simulation:** Users can mine blocks, which processes pending transactions and rewards the miner.

## Getting Started

### Prerequisites

Before you start, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12.0 or higher)
- [npm](https://npmjs.com/) (typically included with Node.js)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/robertrothe/2rcoin.git
   cd 2rcoin
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the required Node.js modules:

   ```bash
   npm install
   ```

3. **Start the Node Server**

   You will need to start multiple instances of the application on different ports to simulate the P2P network. Open several terminal windows or tabs and start each node with a unique port:

   ```bash
   # In the first terminal
   node server.js 3001

   # In the second terminal
   node server.js 3002

   # Add more terminals for more nodes if needed
   ```

### Usage

After starting the node servers, you can interact with the blockchain through your web browser.

1. **Access the Node Interface**

   - Open a web browser and go to `http://localhost:3001` to interact with the first node.
   - Open another tab or window and access `http://localhost:3002` for the second node.

2. **Mine Blocks**

   - Click on the **Mine Block** button to process pending transactions and mine a new block.

3. **Create Transactions**

   - Use the wallet interface to send 2r1 coins from one address to another.
   - Enter the recipient's address and the amount, then click **Send**.

4. **Check the Blockchain and Wallet**

   - View the updated blockchain and transactions in the **Blockchain** section.
   - Check updated balances in the **Wallet** section.

## Architecture

This project is structured as follows:

- **Blockchain Logic:** Core blockchain functionalities are implemented in JavaScript within the client-side application (`index.html`).
- **Server:** The `server.js` file in the root directory sets up a simple HTTP and WebSocket server that facilitates P2P communication between nodes.
- **Static Files:** Served directly by the Express.js server, allowing user interaction through a web interface.

## Contributing

Contributions to the development of 2r1 Coin are welcome! Here's how you can contribute:

1. **Report Bugs** and **Request Features**: Use the GitHub Issues tracker to send bug reports and feature requests.
2. **Send Pull Requests**: If you want to contribute code:
   - Fork the repository.
   - Create a new branch (`git checkout -b feature-branch`).
   - Commit your changes (`git commit -am 'Add some feature'`).
   - Push to the branch (`git push origin feature-branch`).
   - Open a pull request.

## License

This project is licensed by ROBERTROTHE.COM - see the [LICENSE](LICENSE) file for details.
