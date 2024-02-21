import React, {useState, useEffect} from 'react'
import './filter.css';

const Filter = () => {

    const [showFilter, setShowFilter] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(localStorage.getItem('selectedCategory') || null);
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);


  
    const toggleFilter = () => {
      setShowFilter(!showFilter);
    };

  const handleSearch = (query) => {
  setSearchQuery(query);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
  setFilteredProducts(filteredProducts);
};

    const handleCategorySelection = (category) => {
        const updatedList = products.filter((x)=>x.category === category);
        console.log('Selected Category:', updatedList);
        setProducts(updatedList);
        setSelectedCategory(category);
        localStorage.setItem('selectedCategory', category);
      };
  
      useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
    
            if (response.ok) {
              setCategories(data.products.map((product) => product.category));
            } else {
              console.error('Error fetching categories:', data.error || 'Unknown error');
            }
          } catch (error) {
            console.error('Error fetching categories:', error);
          }
        };
    
        if (showFilter) {
          fetchCategories();
        }
      }, [showFilter]);
    
      useEffect(() => {
        const fetchProducts = async () => {
          try {
            let apiUrl = 'https://dummyjson.com/products';
      
            if (selectedCategory) {
              apiUrl += `?category=${selectedCategory}`;
            }
      
            const response = await fetch(apiUrl);
            const data = await response.json();
      
            if (response.ok) {
              setProducts(data.products);
              setFilteredProducts(data.products);
            } else {
              console.error('Error fetching products:', data.error || 'Unknown error');
            }
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
      
        // Always fetch products on component mount
        fetchProducts();
      }, [selectedCategory]);
    
      const uniqueCategories = Array.from(new Set(categories));

    // console.log(uniqueCategories);

  return (
    <div className='nutrition-rec'>
        <div className="container">
            <div className='secTitle'>
                <h2>Recepies</h2>
                <div className='work-search'>
                    <div className='container'>
                        <form id='content' action='/search' method='get'>
                        <input type="hidden" name="type" value="product" />
                       <input
                        type="text"
                        name="q"
                        placeholder="Search"
                        className="input square"
                        id="search-input"
                        aria-label="Search Site"
                        autoComplete="off"
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                      />

                        <button type="reset" className="search close" id="search-btn" onClick={handleSearch}>       
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.3438" cy="11.1877" r="8.5" stroke="black" stroke-width="2"></circle>
                        <line x1="17.5509" y1="16.9806" x2="23.5509" y2="22.9806" stroke="black" stroke-width="2"></line>
                        </svg>
                        </button>
                        <ul className="search-results">
                        {searchQuery && ( filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                          <div key={product.id} className='item-search Recipe'>
                          <span className='thumbnail blog'><img src={product.thumbnail} alt={product.title} /></span>
                          <span className='title'>{product.title}</span>
                          </div>
                        ))
                      ) : (
                        <span className='title'>No results found</span>
                      )
                        )}
                        </ul>
                        </form>
                    </div>
                </div>
                <button className={`btn showFilter ${showFilter ? 'active' : ''}`} onClick={toggleFilter} data-href="scroll_recipe">Filter <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <circle cx="6.84375" cy="14.6877" r="4" stroke="currentColor" stroke-width="2"></circle>
                <path d="M14.8438 9.68774C14.8438 7.47861 16.6346 5.68774 18.8437 5.68774C21.0529 5.68774 22.8437 7.4786 22.8437 9.68774C22.8437 11.8969 21.0529 13.6877 18.8438 13.6877C16.6346 13.6877 14.8438 11.8969 14.8438 9.68774Z" stroke="currentColor" stroke-width="2"></path>
                <line x1="6.84375" y1="10.6877" x2="6.84375" y2="1.68774" stroke="currentColor" stroke-width="2"></line>
                <line x1="18.8438" y1="13.6877" x2="18.8438" y2="23.6877" stroke="currentColor" stroke-width="2"></line>
                <line x1="6.84375" y1="23.6877" x2="6.84375" y2="19.6877" stroke="currentColor" stroke-width="2"></line>
                <line x1="18.8438" y1="1.68774" x2="18.8438" y2="5.68774" stroke="currentColor" stroke-width="2"></line>
                </svg></button>
            </div>
            {showFilter && (
                <div className="collection-header active">
                    <div>
                        <div className='oyg_filter'>
                            <div className='container'>
                                <div className='filters-toolbar'>
                                    <div className='main-left'>
                 {uniqueCategories.map((category, index) => (
                <div className='advanced-filters' key={index}>
                  <h6 key={index} onClick={() => handleCategorySelection(category)}>{category}</h6>
                  </div>
                ))}

                    </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                )}
                 {selectedCategory && (
            <div className="custom-filter">
                <div className='c-food-list for-bg'>
                    <div className='container collection-page'>
                        <div className='EndlessScroll'>
                            <div className='row'>
                {products.map((product) => (
                    <div className='col-md-4'>
                        <div className='recipe_block'>
                  <div className='recipe_block'>
                    <div className='res_img'>
                  <img src={product.thumbnail} alt="" className='thumbs' />
                  </div>
                  </div>
                  <div className='bottom'>
                  <h4>{product.title}</h4>
                  </div>
                  </div>
                  </div>
                ))}
              </div>
              </div>
              </div>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Filter;
