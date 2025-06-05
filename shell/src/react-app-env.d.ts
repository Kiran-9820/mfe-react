/// <reference types="react-scripts" />

// Module Federation type declarations
declare module 'headerMfe/Header' {
  import React from 'react';
  
  interface HeaderProps {
    title?: string;
  }
  
  const Header: React.FC<HeaderProps>;
  export default Header;
}

declare module 'productsMfe/Products' {
  import React from 'react';
  
  const Products: React.FC;
  export default Products;
}
