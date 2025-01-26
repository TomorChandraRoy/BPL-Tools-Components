import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import BPLComponents from './Components/Common/BPLComponents';



document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-bpl-test-plugin');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />
			<BPLComponents attributes={attributes}/>
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});