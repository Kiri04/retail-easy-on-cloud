export class Fields {
  fieldName = '';
  fieldLabel = '';
  visible = true;
  columnWidth = 100; // Percentage of the table width.
}

export class MetaData {
  title = '';
  fields: Fields[] = [];
}
