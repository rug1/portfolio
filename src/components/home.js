import React from "react"

import { HeroContainer, HeroH1, HeroH2, Cursor } from "../styledComponents/hero"

class HomePage extends React.Component {
  state = { typeAnimationText: "", typeAnimationLineCount: 0 }

  typeAnimationLines = ["Hello.", "I’m Ruth Uwemedimo,", "software engineer."]

  componentDidMount() {
    this.typeAnimation(this.typeAnimationLines[0])
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.typeAnimationLineCount !== this.state.typeAnimationLineCount &&
      this.typeAnimationLines.length !== this.state.typeAnimationLineCount
    ) {
      this.typeAnimation(
        this.typeAnimationLines[this.state.typeAnimationLineCount]
      )
    }
  }

  typeAnimation = text => {
    const { typeAnimationText, typeAnimationLineCount } = this.state
    if (typeAnimationText.length !== text.length) {
      setTimeout(() => {
        this.setState({
          typeAnimationText: text.substring(0, typeAnimationText.length + 1),
        })
        this.typeAnimation(text, typeAnimationText.length + 1)
      }, 150)
    } else {
      setTimeout(() => {
        this.setState({
          typeAnimationText: "",
          typeAnimationLineCount: typeAnimationLineCount + 1,
        })
      }, 2000)
    }
  }

  renderText = lineNumber => {
    const { typeAnimationLineCount, typeAnimationText } = this.state

    return typeAnimationLineCount === lineNumber
      ? typeAnimationText
      : this.typeAnimationLines[lineNumber]
  }

  render() {
    const { typeAnimationLineCount } = this.state
    return (
      <HeroContainer image={this.props.image} two={this.props.two}>
        <div>
          <HeroH1>{this.renderText(0)}</HeroH1>
          {typeAnimationLineCount === 0 && <Cursor big>|</Cursor>}
        </div>

        {typeAnimationLineCount >= 1 && (
          <div>
            <HeroH2>{this.renderText(1)}</HeroH2>
            {typeAnimationLineCount === 1 && <Cursor>|</Cursor>}
          </div>
        )}

        {typeAnimationLineCount >= 2 && (
          <div>
            <HeroH2>{this.renderText(2)}</HeroH2>
            {typeAnimationLineCount === 2 && <Cursor>|</Cursor>}
          </div>
        )}
      </HeroContainer>
    )
  }
}

export default HomePage
