"use client";

// pages/vote.js
import React from "react";
import VoteForFavorite from "./src/components/voteForFave";

const VotePage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mt-8 mb-4">
        Vote for Your Favorite Lesson
      </h1>
      <VoteForFavorite />
    </div>
  );
};

export default VotePage;
