const { registerBlockType } = wp.blocks;
const { Component } = wp.element;
const {
	Placeholder,
	Disabled,
	Toolbar,
	IconButton,
	TextControl,
} = wp.components;

const { BlockControls } = wp.blockEditor;

class KinderBlockEdit extends Component {
	state = {
		editMode: true,
	};

	getBlockControls = () => {
		return (
			<BlockControls>
				<Toolbar>
					<IconButton
						label={this.state.editMode ? "Preview" : "Edit"}
						icon={this.state.editMode ? "welcome-view-site" : "edit"}
						onClick={() =>
							this.setState({ editMode: !this.state.editMode })
						}
					/>
				</Toolbar>
			</BlockControls>
		);
	};

	render() {
		const { attributes, setAttributes } = this.props;
		return [
			this.getBlockControls(),
			<div>
				{this.state.editMode && (
					<div>
						<div className="kinder-info">
							Kindly donate to this charity:
						</div>
						<TextControl
							placeholder="(for ex: simavi)"
							value={attributes.kinderIframe}
							onChange={(newtext) =>
								setAttributes({ kinderIframe: newtext })
							}
						/>
					</div>
				)}
				{!this.state.editMode && (
					<Placeholder isColumnLayout={true}>
						<Disabled>
							<iframe
								className="kinder-iframe"
								src={`https://embed.joinkinder.org/donate/?cause=${
									attributes.kinderIframe
								}`}
								frameborder="0"
								allow="autoplay; encrypted-media"
								allowfullscreen
							/>
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
		"A custom Wordpress block to automatically import a Kinder iframe into an article or a post.",
	keywords: ["kinder", "donation"],
	attributes: {
		kinderIframe: {
			type: "string",
		},
	},
	edit: KinderBlockEdit,
	save: (props) => {
		const { attributes } = props;
		return (
			<iframe
				className="kinder-iframe"
				src={`https://embed.joinkinder.org/donate/?cause=${
					attributes.kinderIframe
				}`}
				frameborder="0"
				allow="autoplay; encrypted-media"
				allowfullscreen
			/>
		);
	},
});
