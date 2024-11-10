import * as monaco from 'monaco-editor';
import rustWorker from '$lib/ra-worker.js?worker';

self.MonacoEnvironment = {
	getWorker: function () {
		return new rustWorker();
	}
};

export default monaco;
