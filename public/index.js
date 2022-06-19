$(document).ready(function () {
    var App = function () {
        this.state = {};
        this.$app = $('#app');
        this.renderView('createPk');
    };

    App.prototype.renderView = function (view) {
        this.$app.html('');
        this.renderHeader();
        this[view]();
    };

    App.prototype.renderHeader = function () {
        this.$header = $('<h1>Product Kind Tool</h1>').addClass('mainHeader');
        this.$btnPanel = $('<div></div>').addClass('btnPanel');

        this.$createPkBtn = $('<button>Create Product Kind</button>').addClass('btnPanelBtn');
        this.$updatePkBtn = $('<button>Update Product Kind</button>').addClass('btnPanelBtn');
        this.$addAttributesBtn = $('<button>Add Attributes</button>').addClass('btnPanelBtn');
        this.$updateAttribsBtn = $('<button>Update Attributes</button>').addClass('btnPanelBtn');
        this.$updateTemplateBtn = $('<button>Update Template</button>').addClass('btnPanelBtn');

        var app = this;
        this.$createPkBtn.click(function (event) {
            app.renderView('createPk');
        });

        this.$updatePkBtn.click(function () {
            app.renderView('updatePk');
        });

        this.$addAttributesBtn.click(function () {
            app.renderView('addAttribs');
        });

        this.$updateAttribsBtn.click(function () {
            app.renderView('updateAttribs');
        });

        this.$updateTemplateBtn.click(function () {
            app.renderView('updateTemplate');
        });

        this.$btnPanel.append(
            this.$createPkBtn,
            this.$updatePkBtn,
            this.$addAttributesBtn,
            this.$updateAttribsBtn,
            this.$updateTemplateBtn,
        );

        this.$app.append(
            this.$header,
            this.$btnPanel,
        );
    };

    App.prototype.createPk = function () {
        this.$subHeader = $('<h2>Create Product Kind</h2>').addClass('subHeader');
        this.$toPkLabel = $('<label>Clone To: </label>').addClass('mainLabel');
        this.$toPkInput = $('<input type="text" />').addClass('mainInput');
        this.$fromPkLabel = $('<label>Clone From: </label>').addClass('mainLabel');
        this.$fromPkInput = $('<input type="text" />').addClass('mainInput');
        this.$createPkBtn = $('<button>Create Product Kind</button>').addClass('createPkButton');
        this.$messageLabel = $('<label></label>').addClass('messageLabel');
        this.$contentBox = $('<div></div>').addClass('createPkContent');
        this.$fromBox = $('<div></div>').addClass('inputBoxMain');
        this.$toBox = $('<div></div>').addClass('inputBoxMain');
        this.$inputContainer = $('<div></div>').addClass('inputContainer');

        this.$fromBox.append([
            this.$fromPkLabel,
            this.$fromPkInput,
        ]);

        this.$toBox.append([
            this.$toPkLabel,
            this.$toPkInput,
        ]);

        this.$inputContainer.append([
            this.$toBox,
            this.$fromBox,
        ]);

        this.$contentBox.append([
            this.$inputContainer,
            this.$createPkBtn,
            this.$messageLabel,
        ]);

        this.$app.append([
            this.$subHeader,
            this.$contentBox,
        ]);
    };

    App.prototype.updatePk = function () {
        this.$subHeader = $('<h2>Update Product Kind</h2>').addClass('subHeader');
        this.$contentBox = $('<div></div>').addClass('updatePkContent');

        this.$app.append([
            this.$subHeader,
            this.$contentBox,
        ]);
    };

    App.prototype.addAttribs = function () {
        this.$subHeader = $('<h2>Add Attributes</h2>').addClass('subHeader');
        this.$contentBox = $('<div></div>').addClass('updatePkContent');

        this.$app.append([
            this.$subHeader,
            this.$contentBox,
        ]);
    };

    App.prototype.updateAttribs = function () {
        this.$subHeader = $('<h2>Update Attributes</h2>').addClass('subHeader');
        this.$contentBox = $('<div></div>').addClass('updatePkContent');

        this.$app.append([
            this.$subHeader,
            this.$contentBox,
        ]);
    };

    App.prototype.updateTemplate = function () {
        this.$subHeader = $('<h2>Update Template</h2>').addClass('subHeader');
        this.$contentBox = $('<div></div>').addClass('updatePkContent');

        this.$app.append([
            this.$subHeader,
            this.$contentBox,
        ]);
    };

    new App()
});