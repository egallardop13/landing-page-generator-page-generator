"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const SavedPagesContext = createContext();

export const useSavedPagesContext = () => useContext(SavedPagesContext);

export const SavedPagesProvider = ({ children }) => {
  const [savedPages, setSavedPages] = useState([]);

  useEffect(() => {
    const pages = JSON.parse(localStorage.getItem("pages")) || [];
    setSavedPages(pages);
  }, []);

  const savePage = (newPage) => {
    const pages = JSON.parse(localStorage.getItem("pages")) || [];
    const updatedPages = [...pages, newPage];
    localStorage.setItem("pages", JSON.stringify(updatedPages));
    setSavedPages(updatedPages);
  };

  const deletePage = (index) => {
    const pages = JSON.parse(localStorage.getItem("pages")) || [];
    const updatedPages = pages.filter((_, i) => i !== index);
    localStorage.setItem("pages", JSON.stringify(updatedPages));
    setSavedPages(updatedPages);
  };

  return (
    <SavedPagesContext.Provider value={{ savedPages, savePage, deletePage }}>
      {children}
    </SavedPagesContext.Provider>
  );
};
