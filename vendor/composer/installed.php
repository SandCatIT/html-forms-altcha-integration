<?php return array(
    'root' => array(
        'name' => 'www-data/html-forms-altcha-integration',
        'pretty_version' => 'dev-main',
        'version' => 'dev-main',
        'reference' => 'ffcb7350801bd3f497434ad65cecb8d457a5d068',
        'type' => 'wordpress-plugin',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'dev' => true,
    ),
    'versions' => array(
        'altcha-org/altcha' => array(
            'pretty_version' => 'v2.0.2',
            'version' => '2.0.2.0',
            'reference' => '1028107ae5455edd92b27aa2de0fa9e278e2f2ff',
            'type' => 'library',
            'install_path' => __DIR__ . '/../altcha-org/altcha',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'composer/installers' => array(
            'pretty_version' => 'v1.12.0',
            'version' => '1.12.0.0',
            'reference' => 'd20a64ed3c94748397ff5973488761b22f6d3f19',
            'type' => 'composer-plugin',
            'install_path' => __DIR__ . '/./installers',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'roundcube/plugin-installer' => array(
            'dev_requirement' => false,
            'replaced' => array(
                0 => '*',
            ),
        ),
        'shama/baton' => array(
            'dev_requirement' => false,
            'replaced' => array(
                0 => '*',
            ),
        ),
        'www-data/html-forms-altcha-integration' => array(
            'pretty_version' => 'dev-main',
            'version' => 'dev-main',
            'reference' => 'ffcb7350801bd3f497434ad65cecb8d457a5d068',
            'type' => 'wordpress-plugin',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
    ),
);
