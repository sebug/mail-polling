import ko from 'knockout';
import crossroads from 'crossroads';
import hasher from 'hasher';
import regeneratorRuntime from 'babel-regenerator-runtime';

import htmlContent from './component.html';
import cssContent from './component.css';

function getComponent(componentName) {

}

class ViewModel {
    constructor(params) {
        this.componentName = ko.observable('');
        this.componentName = this.componentName.bind(this);
        
        crossroads.routed.add(r => {
            getComponent(r).then(() => {
                this.componentName(r);
            });
        }, console);

        function parseHash(newHash, oldHash) {
            crossroads.parse(newHash);
        }
        hasher.initialized.add(parseHash); //parse initial hash
        hasher.changed.add(parseHash); //parse hash changes
        hasher.init(); //start listening for history change
    }
}

ko.components.register('app-root', {
    viewModel: ViewModel,
    template: htmlContent
});

ko.applyBindings({}, document.body);