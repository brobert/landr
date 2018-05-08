import React from 'react';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';

class AsideLeft extends React.Component {

    render() {
        return (
            <aside className="sidebar sidebar-left sidebar-menu">
                <div className="viewport" style={{position: 'relative', overflow: 'hidden', width: 'auto'}}>
                    <section className="content slimscroll" style={{overflow: 'hidden', width: 'auto'}}>
                        <ul className="topmenu topmenu-responsive" data-toggle="menu">
                            <li>
                                <a href="/" data-target="#dashboard" data-parent=".topmenu">
                                    <span className="figure"><i className="ico-home2"></i></span>
                                    <span className="text">Dashboard</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="javascript:void(0);" data-toggle="submenu" data-target="#layout" data-parent=".topmenu">
                                    <span className="figure"><i className="ico-grid"></i></span>
                                    <span className="text">Layouts</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul id="layout" className="submenu collapse ">
                                    <li className="submenu-header ellipsis">Page Layout</li>
                                    <li>
                                        <a href="layout-default.html">
                                            <span className="text">Default</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="layout-with-footer.html">
                                            <span className="text">With footer</span>
                                            <span className="number"><span className="label label-success">N</span></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="layout-reveal-header.html">
                                            <span className="text">Reveal header</span>
                                            <span className="number"><span className="label label-success">N</span></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="layout-fixed-header.html">
                                            <span className="text">Fixed header</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="layout-fixed-sidebar.html">
                                            <span className="text">Fixed sidebar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="layout-navbar-collapse.html">
                                            <span className="text">Navbar Collapse</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="widget.html" data-parent=".topmenu">
                                    <span className="figure"><i className="ico-tasks"></i></span>
                                    <span className="text">Stats &amp; Widgets</span>
                                    <span className="number"><span className="label label-danger">6</span></span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" data-target="#components" data-toggle="submenu" data-parent=".topmenu">
                                    <span className="figure"><i className="ico-screen4"></i></span>
                                    <span className="text">UI Elements</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul id="components" className="submenu collapse ">
                                    <li className="submenu-header ellipsis">Components</li>
                                    <li>
                                        <a href="component-animation.html">
                                            <span className="text">Animation</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="component-button.html">
                                            <span className="text">Button</span>
                                            <span className="number"><span className="label label-info">U</span></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="component-carousel.html">
                                            <span className="text">Carousel</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="component-grid.html">
                                            <span className="text">Grid</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="component-icon.html">
                                            <span className="text">Icon</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="component-loading.html">
                                            <span className="text">Loading indicator</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="component-notification.html">
                                            <span className="text">Notification</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="component-panel.html">
                                            <span className="text">Panel</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="component-pricing.html">
                                            <span className="text">Pricing table / box</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="component-slider.html">
                                            <span className="text">Slider</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="component-sortable.html">
                                            <span className="text">Sortable</span>
                                            <span className="number"><span className="label label-success">N</span></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="component-tabsaccordion.html">
                                            <span className="text">Tabs &amp; accordion</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="component-typography.html">
                                            <span className="text">Typography</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="component-others.html">
                                            <span className="text">Miscelleneous</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);" data-toggle="submenu" data-target="#form" data-parent=".topmenu">
                                    <span className="figure"><i className="ico-file"></i></span>
                                    <span className="text">Forms</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul id="form" className="submenu collapse ">
                                    <li className="submenu-header ellipsis">Forms</li>
                                    <li>
                                        <a href="form-element.html">
                                            <span className="text">Element</span>
                                            <span className="number"><span className="label label-info">U</span></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form-layout.html">
                                            <span className="text">Layout</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form-validation.html">
                                            <span className="text">Validation</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form-wizard.html">
                                            <span className="text">Wizard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form-wysiwyg.html">
                                            <span className="text">WYSIWYG Editor</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form-xeditable.html">
                                            <span className="text">X-editable</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form-fileupload.html">
                                            <span className="text">File Upload</span>
                                            <span className="number"><span className="label label-success">N</span></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form-imagecrop.html">
                                            <span className="text">Image Crop</span>
                                            <span className="number"><span className="label label-success">N</span></span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);" data-toggle="submenu" data-target="#table" data-parent=".topmenu">
                                    <span className="figure"><i className="ico-table22"></i></span>
                                    <span className="text">Tables</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul id="table" className="submenu collapse ">
                                    <li className="submenu-header ellipsis">Tables</li>
                                    <li>
                                        <a href="table-default.html">
                                            <span className="text">Basic Tables</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="table-datatable.html">
                                            <span className="text">Data Tables</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);" data-toggle="submenu" data-target="#page" data-parent=".topmenu">
                                    <span className="figure"><i className="ico-copy4"></i></span>
                                    <span className="text">Miscelleneous</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul id="page" className="submenu collapse ">
                                    <li className="submenu-header ellipsis">Miscelleneous</li>
                                    <li>
                                        <a href="page-starter.html">
                                            <span className="text">Blank </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" data-toggle="submenu" data-target="#blog" data-parent="#page">
                                            <span className="text">Blog page</span>
                                            <span className="arrow"></span>
                                        </a>
                                        <ul id="blog" className="submenu collapse ">
                                            <li>
                                                <a href="page-blog-default.html"><span className="text">Blog default</span></a>
                                            </li>
                                            <li>
                                                <a href="page-blog-grid.html"><span className="text">Blog grid</span></a>
                                            </li>
                                            <li>
                                                <a href="page-blog-single.html"><span className="text">Single post</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="page-calendar.html">
                                            <span className="text">Calendar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" data-toggle="submenu" data-target="#email" data-parent="#page">
                                            <span className="text">Email</span>
                                            <span className="arrow"></span>
                                        </a>
                                        <ul id="email" className="submenu collapse ">
                                            <li>
                                                <a href="page-email-inbox.html"><span className="text">Inbox</span></a>
                                            </li>
                                            <li>
                                                <a href="page-email-view.html"><span className="text">View</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" data-toggle="submenu" data-target="#error" data-parent="#page">
                                            <span className="text">Error</span>
                                            <span className="arrow"></span>
                                        </a>
                                        <ul id="error" className="submenu collapse ">
                                            <li>
                                                <a href="page-error-404.html"><span className="text">Not Found (404)</span></a>
                                            </li>
                                            <li>
                                                <a href="page-error-403.html"><span className="text">Forbidden (403)</span></a>
                                            </li>
                                            <li>
                                                <a href="page-error-500.html"><span className="text">Server Error (500)</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="page-faq.html">
                                            <span className="text">FAQ</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page-invoice.html">
                                            <span className="text">Invoice</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page-profile.html">
                                            <span className="text">Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page-login.html">
                                            <span className="text">Login</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page-login-returned.html">
                                            <span className="text">Lock Screen</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page-register.html">
                                            <span className="text">Register</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" data-toggle="submenu" data-target="#media" data-parent="#page">
                                            <span className="text">Media</span>
                                            <span className="arrow"></span>
                                        </a>
                                        <ul id="media" className="submenu collapse ">
                                            <li>
                                                <a href="page-media-album.html"><span className="text">Media album</span></a>
                                            </li>
                                            <li>
                                                <a href="page-media-gallery.html"><span className="text">Media gallery</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" data-toggle="submenu" data-target="#message" data-parent="#page">
                                            <span className="text">Message</span>
                                            <span className="arrow"></span>
                                        </a>
                                        <ul id="message" className="submenu collapse ">
                                            <li>
                                                <a href="page-message-bubble.html"><span className="text">Bubble message</span></a>
                                            </li>
                                            <li>
                                                <a href="page-message-rich.html"><span className="text">Rich message</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="page-timeline-v2.html">
                                            <span className="text">Timeline</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="chart-flot.html">
                                    <span className="figure"><i className="ico-stats-up"></i></span>
                                    <span className="text">Charts</span>
                                    <span className="number"><span className="label label-success">11</span></span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" data-toggle="submenu" data-target="#maps" data-parent=".topmenu">
                                    <span className="figure">
                                        <i className="ico-map3"></i>
                                    </span>
                                    <span className="text">Maps</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul id="maps" className="submenu collapse ">
                                    <li className="submenu-header ellipsis">Maps</li>
                                    <li>
                                        <a href="maps-vector.html">
                                            <span className="text">Vector</span>
                                            <span className="number"><span className="label label-info">U</span></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="maps-google.html">
                                            <span className="text">Google</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);" data-toggle="submenu" data-target="#submenu1" data-parent=".topmenu">
                                    <span className="figure">
                                        <i className="ico-sitemap"></i>
                                    </span>
                                    <span className="text">Menu Levels</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul id="submenu1" className="submenu collapse ">
                                    <li className="submenu-header ellipsis">Menu Levels</li>
                                    <li>
                                        <a href="javascript:void(0);" data-toggle="submenu" data-target="#submenu2" data-parent="#submenu">
                                            <span className="text">Menu Level 1.1</span>
                                            <span className="arrow"></span>
                                        </a>
                                        <ul id="submenu2" className="submenu collapse ">
                                            <li className="submenu-header ellipsis">Menu Levels 1.1</li>
                                            <li>
                                                <a href="javascript:void(0);" data-toggle="submenu" data-target="#submenu3" data-parent="#submenu2">
                                                    <span className="text">Menu Level 2.1</span>
                                                    <span className="arrow"></span>
                                                </a>
                                                <ul id="submenu3" className="submenu collapse ">
                                                    <li className="submenu-header ellipsis">Menu Levels 2.1</li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="text">Menu Level 3.1</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <h5 className="heading">Summary</h5>
                        <div className="wrapper">
                            <div className="table-layout">
                                <div className="col-xs-5 valign-middle">
                                    <span className="sidebar-sparklines" sparktype="bar" sparkbarcolor="#00B1E1"><canvas width="59" height="16" style={{display: 'inline-block', width: '59px', height: '16px', 'verticalAlign': 'top'}}></canvas></span>
                                </div>
                                <div className="col-xs-7 valign-middle">
                                    <h5 className="semibold nm">Server uptime</h5>
                                    <small className="semibold">1876 days</small>
                                </div>
                            </div>

                            <div className="table-layout">
                                <div className="col-xs-5 valign-middle">
                                    <span className="sidebar-sparklines" sparktype="bar" sparkbarcolor="#91C854"><canvas width="59" height="16" style={{display: 'inline-block', width: '59px', height: '16px', 'verticalAlign': 'top'}}></canvas></span>
                                </div>
                                <div className="col-xs-7 valign-middle">
                                    <h5 className="semibold nm">Disk usage</h5>
                                    <small className="semibold">83.1%</small>
                                </div>
                            </div>

                            <div className="table-layout">
                                <div className="col-xs-5 valign-middle">
                                    <span className="sidebar-sparklines" sparktype="bar" sparkbarcolor="#ED5466">
                                        <canvas width="59" height="16" style={{display: 'inline-block', width: '59px', height: '16px', 'verticalAlign': 'top'}}></canvas>
                                    </span>
                                </div>
                                <div className="col-xs-7 valign-middle">
                                    <h5 className="semibold nm">Daily visitors</h5>
                                    <small className="semibold">56.5%</small>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="scrollbar" style={{width: '8px', position: 'absolute', top: '0px', opacity: '0.4', display: 'none', 'borderRadius': '7px', 'zIndex': '99', right: '0px', height: '640px', background: 'rgb(0, 0, 0)'}}></div>
                    <div className="scrollrail" style={{width: '8px', height: '100%', position: 'absolute', top: '0px', display: 'none', 'borderRadius': '7px', opacity: '0.2', 'zIndex': '90', right: '0px', background: 'rgb(51, 51, 51)'}}></div>
                </div>
            </aside>
        );
    }
}

export default AsideLeft;