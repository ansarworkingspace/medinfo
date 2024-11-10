


'use client';
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

const Tool = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setResult('Please enter a medicine name to search.');
      return;
    }

    setIsLoading(true);
    setResult('');

    try {
      // Call the API route to fetch the result
      const response = await axios.post('/api/search', { searchTerm });

      const aiResponse = response.data?.response || 'No result found.';
      setResult(aiResponse);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error('Error fetching AI response:', error.response?.data || error.message || error);
      } else {
        console.error('An unexpected error occurred:', error);
      }
      setResult('There was an error fetching the AI response.');
    } finally {
      setIsLoading(false);
    }
  };

  // Function to render the result as key-value pairs in a user-friendly format
  const renderResult = (result: string) => {
    // Handle the markdown-style formatting and newlines
    const formattedResult = result
      .replace(/\*\*/g, '') // Remove '**' around key names
      .replace(/\n/g, '<br />') // Replace newlines with <br> for proper line breaks
      .replace(/\* /g, '• ');  // Replace '*' with bullet points for list items

    return <div dangerouslySetInnerHTML={{ __html: formattedResult }} />;
  };

  return (
    <div className={`flex flex-col items-center justify-center ${outfit.className}`}>
      <h1 className="text-2xl font-bold mb-4">Search the Medicine Name</h1>
      <div className="flex space-x-2 text-black mb-4">
        <input
          type="text"
          placeholder="Enter medicine name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-80 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600"
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
      <p className="text-center mt-2 text-sm text-gray-500">
        Result AI generated from various web sources. Always verify with a certified pharmacist.
      </p>
      {result && (
        <div className="text-left mt-4 max-w-md bg-gray-800 text-white p-4 rounded-md">
          {renderResult(result)}
        </div>
      )}
    </div>
  );
};

export default Tool;
