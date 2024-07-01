// we use the SourceComponent alias to explicitly import from the parent theme
// (if we would use Component/ProductList/... instead, we would be trying to import
// the current file, which would result in an error)
import { type ReactElement } from 'react';

import { ProductListComponent as SourceProductListComponent } from 'SourceComponent/ProductList/ProductList.component';
import { type PageProps } from 'SourceComponent/ProductList/ProductList.type';
import ProductListPage from 'SourceComponent/ProductListPage';
import { GQLProductStockStatus } from 'SourceType/Graphql.type';

// we imported the original ProductList class defined in the parent theme.
// we aliased the import to `SourceProductListComponent` to indicate that SourceProductListComponent
// is the parent theme version of the class

// you should always copy over the namespace declaration when overriding an existing class
// to avoid breaking plugins
/** @namespace Scandipwa/Component/ProductList/Component */
export class ProductListComponent extends SourceProductListComponent {
    // we can now extend SourceProductListComponent,
    // and override any methods we want to change
    renderPage(props: Partial<PageProps> = {}): ReactElement {
        const {
            isInfiniteLoaderEnabled,
            loadPage,
            isLoading,
            isVisible,
            mix,
            isPlp,
        } = this.props;
        const {
            items = [],
            // keys = [],
            pageNumber = 0,
            selectedFilters = {},
            wrapperRef,
            key,
        } = this._processProps(props);

        const inStockItems = items.filter(
            (item) => !!item.stock_status
        && item.stock_status === GQLProductStockStatus.IN_STOCK,
        );
        const outOfStockItems = items.filter(
            (item) => !!item.stock_status
        && item.stock_status === GQLProductStockStatus.OUT_OF_STOCK,
        );

        const reorderedItems = inStockItems.concat(outOfStockItems);

        return (
      <ProductListPage
        key={ key }
        isInfiniteLoaderEnabled={ isInfiniteLoaderEnabled }
        updatePages={ loadPage }
        isLoading={ isLoading }
        isVisible={ isVisible }
        mix={ mix }
        items={ reorderedItems }
        pageNumber={ pageNumber }
        selectedFilters={ selectedFilters }
        wrapperRef={ wrapperRef }
        isPlp={ isPlp }
      />
        );
    }
}

// we now export the extended and modified version of the class
export default ProductListComponent;
