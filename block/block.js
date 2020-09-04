const { registerBlockType } = wp.blocks;
const { Component, Fragment } = wp.element;
const { Placeholder, Disabled } = wp.components;

const {
	RichText,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
} = wp.blockEditor;
const {
	ToggleControl,
	PanelBody,
	PanelRow,
	CheckboxControl,
	SelectControl,
	ColorPicker,
	Toolbar,
	IconButton,
} = wp.components;

class FirstBlockEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: true,
		};
	}

	getBlockControls = () => {
		const { attributes, setAttributes } = this.props;
		return (
			<BlockControls>
				<AlignmentToolbar
					value={attributes.textAlignment}
					onChange={(newalign) => setAttributes({ textAlignment: newalign })}
				/>
				<Toolbar>
					<IconButton
						label={this.state.editMode ? "Preview" : "Edit"}
						icon={this.state.editMode ? "format-image" : "edit"}
						onClick={() => this.setState({ editMode: !this.state.editMode })}
					/>
				</Toolbar>
			</BlockControls>
		);
	};

	render() {
		const { attributes, setAttributes } = this.props;

		const alignmentClass =
			attributes.textAlignment != null
				? "has-text-align-" + attributes.textAlignment
				: "";

		return [
			this.getBlockControls(),
			<div className={alignmentClass}>
				{this.state.editMode && (
					<Fragment>
						<RichText
							tagName="h2"
							placeholder="Write your heading here"
							value={attributes.myRichHeading}
							onChange={(newtext) => setAttributes({ myRichHeading: newtext })}
						/>
						<RichText
							tagName="p"
							placeholder="Write your paragraph here"
							value={attributes.myRichText}
							onChange={(newtext) => setAttributes({ myRichText: newtext })}
						/>
					</Fragment>
				)}
				{!this.state.editMode && (
					<Placeholder isColumnLayout={true}>
						<Disabled>
							<RichText.Content tagName="h2" value={attributes.myRichHeading} />
							<RichText.Content tagName="p" value={attributes.myRichText} />
						</Disabled>
					</Placeholder>
				)}
			</div>,
		];
	}
}

registerBlockType("cgb/block-kinder-block", {
	title: "Kinder block",
	category: "common",
	icon: "smiley",
	description:
		"A custom Wordpress block to automatically import a Kinder iframer into an article or post",
	keywords: ["kinder", "donation"],
	attributes: {
		myRichHeading: {
			type: "string",
		},
		myRichText: {
			type: "string",
			source: "html",
			selector: "p",
		},
		textAlignment: {
			type: "string",
		},
		toggle: {
			type: "boolean",
			default: true,
		},
		favoriteAnimal: {
			type: "string",
			default: "dogs",
		},
		favoriteColor: {
			type: "string",
			default: "#DDDDDD",
		},
		activateLasers: {
			type: "boolean",
			default: false,
		},
	},
	supports: {
		align: ["wide", "full"],
	},
	edit: FirstBlockEdit,
	save: (props) => {
		const { attributes } = props;

		const alignmentClass =
			attributes.textAlignment != null
				? "has-text-align-" + attributes.textAlignment
				: "";

		return (
			<div className={alignmentClass}>
				<RichText.Content tagName="h2" value={attributes.myRichHeading} />
				<RichText.Content tagName="p" value={attributes.myRichText} />
				{attributes.activateLasers && (
					<div className="lasers">Lasers activated</div>
				)}
			</div>
		);
	},
});
