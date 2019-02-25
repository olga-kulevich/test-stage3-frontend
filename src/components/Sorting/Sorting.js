import React, {PureComponent} from 'react';

class Sorting extends PureComponent {

  render() {
    return (
      <select>
        <option value=""> </option>
        <option value="titleAsc">Title ascending</option>
        <option value="titleDesc">Title descending</option>
        <option value="1">Category ascending</option>
        <option value="-1">Category descending</option>
        <option value="1">Price ascending</option>
        <option value="-1">Price descending</option>
      </select>
    )
  }
}

export default Sorting;
