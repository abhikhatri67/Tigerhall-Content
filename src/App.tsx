import React, { useState } from "react";
import Header from "./components/header/Header";
import { Library } from "./components/library/Library";

const App: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");

  const handleSearch = (value: string): void => setKeyword(value);

  return (
    <main>
      <Header onSearch={handleSearch} />
      <main>
        <Library keyword={keyword} />
      </main>
    </main>
  );
};

export default App;
