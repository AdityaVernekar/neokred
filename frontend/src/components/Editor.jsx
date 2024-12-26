import React, { useState, useCallback } from 'react';
import { useMutation } from 'react-query';
import { debounce } from 'lodash';
import { convertMarkdown } from '../api'; // Import your API call function

const Editor = () => {
  const [markdownText, setMarkdownText] = useState('# Welcome to the Markdown Editor\n\nStart typing...');
  const [htmlPreview, setHtmlPreview] = useState(''); // State to store the converted HTML

  // React Query Mutation for converting Markdown to HTML
  const { mutate, isLoading, error } = useMutation(convertMarkdown, {
    onSuccess: (data) => {
      setHtmlPreview(data?.html); // Update the HTML preview with the response
    },
  });

  // Debounced function to handle markdown conversion
  const debouncedMarkdownConversion = useCallback(
    debounce((markdown) => mutate(markdown), 500), // 500ms debounce time
    []
  );

  // Handle input change with debounce
  const handleInputChange = (e) => {
    const markdown = e.target.value;
    setMarkdownText(markdown);
    debouncedMarkdownConversion(markdown);
  };


  return (
    <div className="flex h-screen">
      {/* Markdown Editor Section */}
      <div className="flex-1 p-4 border-r border-gray-300">
        <textarea
          value={markdownText}
          onChange={handleInputChange}
          placeholder="Type your Markdown here..."
          className="w-full h-full p-4 text-lg font-mono border-none outline-none resize-none bg-gray-50"
        />
      </div>

      {/* Live Preview Section */}
      <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
        {isLoading ? (
          <p>Loading preview...</p>
        ) : error ? (
          <p>Error loading preview!</p>
        ) : (
          <div
            className="prose prose-lg"
            dangerouslySetInnerHTML={{ __html: htmlPreview }}
          />
        )}
      </div>
    </div>
  );
};

export default Editor;
