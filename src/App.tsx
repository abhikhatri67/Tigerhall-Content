import React, { useState } from "react";
import Header from "./components/header/Header";
import { Library } from "./components/library/Library";

const App: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");

  const handleSearch = (value: string): void => setKeyword(value);

  return (
    <div>
      <Header onSearch={handleSearch} />
      <main>
        <Library keyword={keyword} />
      </main>
    </div>
  );
};

export default App;
