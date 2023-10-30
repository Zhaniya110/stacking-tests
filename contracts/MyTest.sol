//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract MyTest{
    uint256 public unlockedTime;
    address payable public owner;

    event Withrawal(uint256 amount, uint256 when);

    constructor(uint256 _unlockedTime) payable{
        require(block.timestamp < _unlockedTime, "Your unlock time should ne in future");

        unlockedTime = _unlockedTime;
        owner = payable(msg.sender);
    }

    function withraw() public{
        require(block.timestamp >= unlockedTime, "Wait till the time period");
        require(msg.sender == owner, "You are not the owner");

        emit Withrawal(address(this).balance, block.timestamp);
        owner.transfer(address(this).balance);
    }
}