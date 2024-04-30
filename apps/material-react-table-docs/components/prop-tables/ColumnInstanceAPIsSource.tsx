import { Box, Typography } from '@mui/material';
import { SourceCodeSnippet } from '../mdx/SourceCodeSnippet';
const TS = require('!!raw-loader!./ColumnInstanceAPIsTable.tsx').default;

const ExampleTable = () => {
  return (
    <Box sx={{ mt: '20rem' }}>
      <Typography>
        Wanna see the source code for this table? Check it out down below!
      </Typography>
      <SourceCodeSnippet tableId="column-instance-apis" typeScriptCode={TS} />
    </Box>
  );
};

export default ExampleTable;
