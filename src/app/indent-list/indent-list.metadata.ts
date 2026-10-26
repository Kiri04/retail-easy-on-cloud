import { Fields, MetaData } from '../listMetaData';

const fields: Fields[] = [
  { fieldName: 'name', fieldLabel: 'Item', visible: true, columnWidth: 35 },
  { fieldName: 'quantity', fieldLabel: 'Quantity', visible: true, columnWidth: 20 },
  { fieldName: 'status', fieldLabel: 'Status', visible: true, columnWidth: 20 }
];

export const INDENT_LIST_METADATA = new MetaData();
INDENT_LIST_METADATA.title = 'Indent List';
INDENT_LIST_METADATA.fields = fields;
