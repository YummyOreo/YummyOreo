```rust
impl YummyOreo {
    pub fn new() -> Self {
        YummyOreo {
            interests: vec!["Coding", "Ultimate Frisbee", "Games", "Immunology", "Dnd", "Panting minis"],
            code: vec![Lang::Rust, Lang::Python, Lang::Typescript],
            tools: vec![Tool::Neovim, Tool::Atuin, Tool::Mongodb, Tool::Gimp, Tool::Figma],

            site: "oreo.is-a.dev",
        }
    }

    pub fn current_projects(&self) -> Vec<Project> {
        vec![Project::RedPhosphorus, Project::Secret]
    }

    pub fn latest_blogs() -> Vec<Blog> {
        vec![

        ]
    }
}
```
