<?php
	
	class Extension_Archivedfilter extends Extension {

		/**
		 * Extension information
		 */	
		public function about() {
			return array(
				'name' => 'Archived Filter',
				'version' => '1.0',
				'release-date' => '2011-06-15',
				'author' => array(
					'name' => 'Brock Petrie',
					'website' => 'http://www.brockpetrie.com',
					'email' => 'brockpetrie@gmail.com'
				),
				'description' => 'Adds a toggle button to show/hide archived items.'
			);
		}

		/**
		 * Add callback functions to backend delegates
		 */	
		public function getSubscribedDelegates() {
			return array(
				array(
					'page' => '/backend/',
					'delegate' => 'InitaliseAdminPageHead',
					'callback' => 'initaliseAdminPageHead'
				)
			);
		}
		
		/**
		 * Add JavaScript
		 */
		public function initaliseAdminPageHead($context) {
			$callback = Symphony::Engine()->getPageCallback();

			// Append javascript for publish table
			if($callback['driver'] == 'publish' && $callback['context']['page'] == 'index') {
				Symphony::Engine()->Page->addScriptToHead(URL . '/extensions/archivedfilter/assets/archivedfilter.publish.js', 2000);
			}
			
		}
	}
