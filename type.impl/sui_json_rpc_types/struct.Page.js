(function() {var type_impls = {
"sui_json_rpc_types":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Page%3CT,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#43\">source</a><a href=\"#impl-Clone-for-Page%3CT,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sui_json_rpc_types/struct.Page.html\" title=\"struct sui_json_rpc_types::Page\">Page</a>&lt;T, C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#43\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sui_json_rpc_types/struct.Page.html\" title=\"struct sui_json_rpc_types::Page\">Page</a>&lt;T, C&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.81.0/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sui_json_rpc_types::sui_checkpoint::CheckpointPage","sui_json_rpc_types::sui_coin::CoinPage","sui_json_rpc_types::sui_event::EventPage","sui_json_rpc_types::sui_extended::EpochPage","sui_json_rpc_types::sui_object::QueryObjectsPage","sui_json_rpc_types::sui_object::ObjectsPage","sui_json_rpc_types::sui_transaction::TransactionBlocksPage","sui_json_rpc_types::DynamicFieldPage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Page%3CT,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#43\">source</a><a href=\"#impl-Debug-for-Page%3CT,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"sui_json_rpc_types/struct.Page.html\" title=\"struct sui_json_rpc_types::Page\">Page</a>&lt;T, C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#43\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sui_json_rpc_types::sui_checkpoint::CheckpointPage","sui_json_rpc_types::sui_coin::CoinPage","sui_json_rpc_types::sui_event::EventPage","sui_json_rpc_types::sui_extended::EpochPage","sui_json_rpc_types::sui_object::QueryObjectsPage","sui_json_rpc_types::sui_object::ObjectsPage","sui_json_rpc_types::sui_transaction::TransactionBlocksPage","sui_json_rpc_types::DynamicFieldPage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-Page%3CT,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#43\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-Page%3CT,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, T, C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"sui_json_rpc_types/struct.Page.html\" title=\"struct sui_json_rpc_types::Page\">Page</a>&lt;T, C&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,\n    C: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#43\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(__deserializer: __D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, __D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","sui_json_rpc_types::sui_checkpoint::CheckpointPage","sui_json_rpc_types::sui_coin::CoinPage","sui_json_rpc_types::sui_event::EventPage","sui_json_rpc_types::sui_extended::EpochPage","sui_json_rpc_types::sui_object::QueryObjectsPage","sui_json_rpc_types::sui_object::ObjectsPage","sui_json_rpc_types::sui_transaction::TransactionBlocksPage","sui_json_rpc_types::DynamicFieldPage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-JsonSchema-for-Page%3CT,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#43\">source</a><a href=\"#impl-JsonSchema-for-Page%3CT,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: JsonSchema, C: JsonSchema&gt; JsonSchema for <a class=\"struct\" href=\"sui_json_rpc_types/struct.Page.html\" title=\"struct sui_json_rpc_types::Page\">Page</a>&lt;T, C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.schema_name\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#43\">source</a><a href=\"#method.schema_name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">schema_name</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a></h4></section></summary><div class='docblock'>The name of the generated JSON Schema. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.schema_id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#43\">source</a><a href=\"#method.schema_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">schema_id</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class='docblock'>Returns a string that uniquely identifies the schema produced by this type. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.json_schema\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#43\">source</a><a href=\"#method.json_schema\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">json_schema</a>(gen: &amp;mut SchemaGenerator) -&gt; Schema</h4></section></summary><div class='docblock'>Generates a JSON Schema for this type. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_referenceable\" class=\"method trait-impl\"><a href=\"#method.is_referenceable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">is_referenceable</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Whether JSON Schemas generated for this type should be re-used where possible using the <code>$ref</code> keyword. <a>Read more</a></div></details></div></details>","JsonSchema","sui_json_rpc_types::sui_checkpoint::CheckpointPage","sui_json_rpc_types::sui_coin::CoinPage","sui_json_rpc_types::sui_event::EventPage","sui_json_rpc_types::sui_extended::EpochPage","sui_json_rpc_types::sui_object::QueryObjectsPage","sui_json_rpc_types::sui_object::ObjectsPage","sui_json_rpc_types::sui_transaction::TransactionBlocksPage","sui_json_rpc_types::DynamicFieldPage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Page%3CT,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#51-59\">source</a><a href=\"#impl-Page%3CT,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, C&gt; <a class=\"struct\" href=\"sui_json_rpc_types/struct.Page.html\" title=\"struct sui_json_rpc_types::Page\">Page</a>&lt;T, C&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.empty\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#52-58\">source</a><h4 class=\"code-header\">pub fn <a href=\"sui_json_rpc_types/struct.Page.html#tymethod.empty\" class=\"fn\">empty</a>() -&gt; Self</h4></section></div></details>",0,"sui_json_rpc_types::sui_checkpoint::CheckpointPage","sui_json_rpc_types::sui_coin::CoinPage","sui_json_rpc_types::sui_event::EventPage","sui_json_rpc_types::sui_extended::EpochPage","sui_json_rpc_types::sui_object::QueryObjectsPage","sui_json_rpc_types::sui_object::ObjectsPage","sui_json_rpc_types::sui_transaction::TransactionBlocksPage","sui_json_rpc_types::DynamicFieldPage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Page%3CT,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#43\">source</a><a href=\"#impl-PartialEq-for-Page%3CT,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"sui_json_rpc_types/struct.Page.html\" title=\"struct sui_json_rpc_types::Page\">Page</a>&lt;T, C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#43\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"sui_json_rpc_types/struct.Page.html\" title=\"struct sui_json_rpc_types::Page\">Page</a>&lt;T, C&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.81.0/src/core/cmp.rs.html#262\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","sui_json_rpc_types::sui_checkpoint::CheckpointPage","sui_json_rpc_types::sui_coin::CoinPage","sui_json_rpc_types::sui_event::EventPage","sui_json_rpc_types::sui_extended::EpochPage","sui_json_rpc_types::sui_object::QueryObjectsPage","sui_json_rpc_types::sui_object::ObjectsPage","sui_json_rpc_types::sui_transaction::TransactionBlocksPage","sui_json_rpc_types::DynamicFieldPage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Page%3CT,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#43\">source</a><a href=\"#impl-Serialize-for-Page%3CT,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sui_json_rpc_types/struct.Page.html\" title=\"struct sui_json_rpc_types::Page\">Page</a>&lt;T, C&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,\n    C: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#43\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(&amp;self, __serializer: __S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;__S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, __S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","sui_json_rpc_types::sui_checkpoint::CheckpointPage","sui_json_rpc_types::sui_coin::CoinPage","sui_json_rpc_types::sui_event::EventPage","sui_json_rpc_types::sui_extended::EpochPage","sui_json_rpc_types::sui_object::QueryObjectsPage","sui_json_rpc_types::sui_object::ObjectsPage","sui_json_rpc_types::sui_transaction::TransactionBlocksPage","sui_json_rpc_types::DynamicFieldPage"],["<section id=\"impl-Eq-for-Page%3CT,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#43\">source</a><a href=\"#impl-Eq-for-Page%3CT,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"sui_json_rpc_types/struct.Page.html\" title=\"struct sui_json_rpc_types::Page\">Page</a>&lt;T, C&gt;</h3></section>","Eq","sui_json_rpc_types::sui_checkpoint::CheckpointPage","sui_json_rpc_types::sui_coin::CoinPage","sui_json_rpc_types::sui_event::EventPage","sui_json_rpc_types::sui_extended::EpochPage","sui_json_rpc_types::sui_object::QueryObjectsPage","sui_json_rpc_types::sui_object::ObjectsPage","sui_json_rpc_types::sui_transaction::TransactionBlocksPage","sui_json_rpc_types::DynamicFieldPage"],["<section id=\"impl-StructuralPartialEq-for-Page%3CT,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_json_rpc_types/lib.rs.html#43\">source</a><a href=\"#impl-StructuralPartialEq-for-Page%3CT,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"sui_json_rpc_types/struct.Page.html\" title=\"struct sui_json_rpc_types::Page\">Page</a>&lt;T, C&gt;</h3></section>","StructuralPartialEq","sui_json_rpc_types::sui_checkpoint::CheckpointPage","sui_json_rpc_types::sui_coin::CoinPage","sui_json_rpc_types::sui_event::EventPage","sui_json_rpc_types::sui_extended::EpochPage","sui_json_rpc_types::sui_object::QueryObjectsPage","sui_json_rpc_types::sui_object::ObjectsPage","sui_json_rpc_types::sui_transaction::TransactionBlocksPage","sui_json_rpc_types::DynamicFieldPage"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()