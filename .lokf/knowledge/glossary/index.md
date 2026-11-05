# Glossary

* [Adapt copy](adapt-copy.md) - An adapt copy: the copy of a published LinkML schema that `lokf adapt` writes so that it can sit beside LOKF's `lokf.yaml` in a domain schema, with its chosen roots on `Concept`.
* [Event class](event-class.md) - An OCSF event class: the shape of one kind of event, named in an event by its `class_uid`. Every one descends from the base event, and there are 87 of them at OCSF 1.9.0.
* [Category](category.md) - An OCSF category: a group of event classes, such as Identity & Access Management, named in an event by its `category_uid`. Each is a subset here, and most have an abstract parent class.
* [Object](ocsf-object.md) - An OCSF object: a value of an event's attribute, such as `OcsfUser` or `OcsfProcess`, which exists only inside an event. So an object is no concept type here.
* [Attribute dictionary](attribute-dictionary.md) - OCSF's one definition of each attribute, which a class or object then refines. Each dictionary attribute is a top-level slot here, and a class refines it through `slot_usage`.
* [Profile](profile.md) - An OCSF profile: a set of attributes an event opts into by listing it in `metadata.profiles`. Each is a mixin here, such as `OcsfCloudProfile`.
* [Sibling](sibling.md) - The string attribute that holds the label of an enumerated one, as `activity_name` does for `activity_id`. An `ocsf_sibling` annotation names it.
* [Extension](extension.md) - An OCSF extension: the Linux, macOS and Windows additions in the tag. Each extension element carries an `ocsf_extension` annotation and sits in a subset, and only the Windows extension adds event classes, which have a module of their own.
