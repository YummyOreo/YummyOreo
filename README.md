```rust
impl YummyOreo {
    pub fn new() -> Self {
        YummyOreo {
            interests: vec!["Coding", "Ultimate Frisbee", "Games", "Immunology", "Dnd", "Panting"],
            code: vec![Lang::Rust, Lang::Python, Lang::Typescript],
            tools: vec![Tool::Neovim, Tool::Mongobd, Tool::Gimp, Tool::Figma],
            
            site: "oreo.is-a.dev",
        }
    }
    
    pub fn current_project(&self) -> Project {
        Project::Secret
    }
}
