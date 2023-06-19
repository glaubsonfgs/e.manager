import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';

export function Finished(): ReactElement {
	return (
		<Box>
			<Typography style={{ textAlign: 'center', fontWeight: 'bold' }}>
				Pronto! ao clicar em finalizar seus dados serão armazenados
			</Typography>
		</Box>
	);
}
