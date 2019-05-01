import React, { useState } from 'react';
import { Column } from '../../types';

import { FilterArgs } from '../../../common/types';

interface Props {
  column: Column;
  onChange?(args: FilterArgs): void;
  /** TODO: remove */
  getValidFilterValues?(): void;
}

export default function FilterableHeaderCell({ column, onChange }: Props) {
  const [filterTerm, setFilterTerm] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setFilterTerm(value);
    if (onChange) {
      onChange({ filterTerm: value, column });
    }
  }

  if (column.filterable === false) {
    return <div />;
  }

  return (
    <div className="form-group">
      <input
        key={`header-filter-${column.key}`}
        className="form-control input-sm"
        placeholder="Search"
        value={filterTerm}
        onChange={handleChange}
      />
    </div>
  );
}